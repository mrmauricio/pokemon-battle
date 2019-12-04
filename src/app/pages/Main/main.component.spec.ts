import {
    ComponentFixture,
    TestBed,
    fakeAsync,
    tick
} from "@angular/core/testing";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MainComponent } from "./main.component";
import { LoadingComponent } from "../../components/Loading/loading.component";
import { ErrorComponent } from "../../components/Error/error.component";
import { PokemonCardComponent } from "../../components/PokemonCard/pokemon-card.component";

import { TrophyService } from "./../../services/trophy.service";
import { PokemonService } from "./../../services/pokemon.service";

import { MockComponent } from "ng-mocks";
import { mockPokemonPreview } from "./../../mocks/mockPokemonPreview";

describe("-------------- (page) MainComponent --------------", () => {
    let fixture: ComponentFixture<MainComponent>;
    let mockPokemonService, mockRouter, mocktrophyService;

    beforeEach(() => {
        mockPokemonService = jasmine.createSpyObj([
            "getPokemonPreviewByIdList"
        ]);
        mockRouter = jasmine.createSpyObj(["navigate"]);
        mocktrophyService = jasmine.createSpyObj([
            "getTrophyList",
            "setInitialTrophyList"
        ]);

        TestBed.configureTestingModule({
            declarations: [
                MainComponent,
                MockComponent(LoadingComponent),
                MockComponent(ErrorComponent),
                MockComponent(PokemonCardComponent)
            ],
            imports: [FontAwesomeModule],
            providers: [
                { provide: PokemonService, useValue: mockPokemonService },
                { provide: Router, useValue: mockRouter },
                { provide: TrophyService, useValue: mocktrophyService }
            ]
        });

        fixture = TestBed.createComponent(MainComponent);
    });

    describe(":", () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it("should display on screen all sections declared on the sections array", () => {
            let sections = fixture.nativeElement.querySelectorAll("section");
            let sectionArray = fixture.componentInstance.sections;

            expect(sections.length).toBe(sectionArray.length);
        });

        it("should display the section title and icon on a h1", () => {
            let section = fixture.nativeElement.querySelector("section");

            let h1Text = section.querySelector("h1").textContent;
            let h1Icon = section.querySelector("h1 fa-icon");

            expect(h1Text).toContain(
                fixture.componentInstance.sections[0].title.name
            );

            expect(h1Icon).toBeTruthy();
        });

        it("should display loading component on start when data is loading", () => {
            let loading = fixture.nativeElement.querySelector(
                "section app-loading"
            );

            expect(loading).toBeTruthy();
        });

        it("should display error component on start when data is loading", () => {
            fixture.componentInstance.sections[0].error = true;
            fixture.detectChanges();

            let error = fixture.nativeElement.querySelector(
                "section app-error"
            );

            expect(error).toBeTruthy();
        });

        it("should display on screen all buttons declared on the section's button list", () => {
            fixture.componentInstance.sections[0].isLoading = false;
            fixture.detectChanges();

            let buttons = fixture.nativeElement.querySelectorAll(
                "section button"
            );
            let buttonList =
                fixture.componentInstance.sections[0].buttonList.buttons;

            expect(buttons.length).toBe(buttonList.length);
        });

        it("should display on screen all pokemons declared on the section's pokemon list", () => {
            fixture.componentInstance.sections[0].isLoading = false;
            fixture.componentInstance.sections[0].pokemonList = [
                mockPokemonPreview,
                mockPokemonPreview,
                mockPokemonPreview
            ];
            fixture.componentInstance.trophyList = {
                6: 0
            };
            fixture.detectChanges();

            let pokemonCards = fixture.nativeElement.querySelectorAll(
                "section app-pokemon-card"
            );
            let pokemonList = fixture.componentInstance.sections[0].pokemonList;

            expect(pokemonCards.length).toBe(pokemonList.length);
        });

        it("should redirect to a random pokemon detail when Pick Random button is clicked", () => {
            fixture.componentInstance.sections[0].isLoading = false;
            fixture.detectChanges();

            fixture.nativeElement.querySelector("section button").click();

            expect(mockRouter.navigate).toHaveBeenCalled();
        });

        // deve-se usar fakeAsync quando for utilizar promise on teste p/ esta ser tratada de forma sincrona
        it("should display more pokemon on screen cards when Load More button is clicked", fakeAsync(() => {
            fixture.componentInstance.sections[1].isLoading = false;
            fixture.componentInstance.sections[1].pokemonList = [
                { ...mockPokemonPreview, id: 12 }
            ];
            fixture.componentInstance.trophyList = {
                12: 0
            };
            fixture.detectChanges();

            spyOn(
                fixture.componentInstance,
                "fetchPokemonByIdList"
            ).and.returnValue(
                Promise.resolve([
                    { ...mockPokemonPreview, id: 13 },
                    { ...mockPokemonPreview, id: 14 }
                ])
            );
            fixture.nativeElement.querySelector("section button").click();

            // wait for async operation
            tick();

            fixture.detectChanges();

            let pokemonCards = fixture.nativeElement.querySelectorAll(
                "section app-pokemon-card"
            );

            expect(pokemonCards.length).toBe(3);
        }));
    });

    describe("fetchPokemonByIdList:", () => {
        it("should call, at start, pokemon service to fetch two lists", () => {
            fixture.detectChanges();

            expect(
                mockPokemonService.getPokemonPreviewByIdList
            ).toHaveBeenCalledTimes(2);

            expect(
                mockPokemonService.getPokemonPreviewByIdList
            ).toHaveBeenCalledWith(fixture.componentInstance.fightersIdList);
            expect(
                mockPokemonService.getPokemonPreviewByIdList
            ).toHaveBeenCalledWith(fixture.componentInstance.pokedexList);
        });

        it("should set error property of the current section if something went wrong", () => {
            mockPokemonService.getPokemonPreviewByIdList.and.throwError(
                "error"
            );

            fixture.componentInstance.fetchPokemonByIdList([1, 2, 3], 1, false);

            expect(fixture.componentInstance.sections[0].error).toBe(true);
        });

        it("should return data if the function is called with a third parameter", fakeAsync(() => {
            mockPokemonService.getPokemonPreviewByIdList.and.returnValue(
                Promise.resolve([{ mockPokemonPreview }])
            );

            fixture.componentInstance
                .fetchPokemonByIdList([1, 2, 3], 1, true)
                .then(res => {
                    expect(res).toBeTruthy();
                });
        }));
    });

    describe("handleTrophies:", () => {
        it("should call, at start, trophy service to get trophy list", () => {
            fixture.detectChanges();

            expect(mocktrophyService.getTrophyList).toHaveBeenCalled();
        });

        it("should not set initial trophy list if there's already a trophy list", () => {
            let mockList = {
                3: 0,
                6: 0,
                9: 0
            };

            mocktrophyService.getTrophyList.and.returnValue(mockList);

            fixture.detectChanges();

            expect(fixture.componentInstance.trophyList).toBe(mockList);

            expect(mocktrophyService.getTrophyList).toHaveBeenCalled();

            expect(
                mocktrophyService.setInitialTrophyList
            ).not.toHaveBeenCalled();
        });

        it("should set initial trophy list if there's no a trophy list", () => {
            fixture.detectChanges();

            expect(mocktrophyService.getTrophyList).toHaveBeenCalled();

            expect(fixture.componentInstance.trophyList).toBe(undefined);

            expect(mocktrophyService.setInitialTrophyList).toHaveBeenCalled();
        });
    });

    describe("handleRandomSelection:", () => {
        it("should select a random pokemon id between 1 and 151 and redirect to it's detail page ", () => {
            fixture.componentInstance.handleRandomSelection(1, false);

            let call = mockRouter.navigate.calls.mostRecent().args[0];

            expect(mockRouter.navigate).toHaveBeenCalled();

            expect(call[1]).toBeGreaterThanOrEqual(1);
            expect(call[1]).toBeLessThanOrEqual(151);
        });

        it("should select a random pokemon id on the section's pokemons and redirect to it's detail page ", () => {
            fixture.componentInstance.sections[0].pokemonList = [
                { ...mockPokemonPreview, id: 3 },
                mockPokemonPreview,
                { ...mockPokemonPreview, id: 9 }
            ];
            fixture.componentInstance.handleRandomSelection(1, true);

            let call = mockRouter.navigate.calls.mostRecent().args[0];

            expect(mockRouter.navigate).toHaveBeenCalled();

            expect([3, 6, 9]).toContain(call[1]);
        });
    });

    describe("handlePokedexLoad", () => {
        it("should fetch the next 12 pokemon ids on pokedexList", () => {
            fixture.componentInstance.sections[1].pokemonList = [
                { ...mockPokemonPreview, id: 12 }
            ];
            spyOn(fixture.componentInstance, "fetchPokemonByIdList");

            fixture.componentInstance.handlePokedexLoad(2);

            expect(
                fixture.componentInstance.fetchPokemonByIdList
            ).toHaveBeenCalledWith(
                [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                2,
                true
            );
        });
    });
});
