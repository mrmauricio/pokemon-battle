import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { PokemonCardComponent } from "./pokemon-card.component";

import { mockPokemonPreview } from "../../mocks/mockPokemonPreview";
import { By } from "@angular/platform-browser";

describe("-------------- (component) PokemonCardComponent --------------", () => {
    let fixture: ComponentFixture<PokemonCardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [PokemonCardComponent],
            imports: [RouterTestingModule]
        });
        fixture = TestBed.createComponent(PokemonCardComponent);
        fixture.componentInstance.pokemon = mockPokemonPreview;
        fixture.componentInstance.trophyAmount = 0;
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should display this pokemon's id and name inside a h2 tag", () => {
            let h2Text = fixture.nativeElement.querySelector("h2").textContent;

            expect(h2Text).toEqual("#6 Charizard");
        });

        it("should display an anchor to this pokemon's detail page", () => {
            let href = fixture.debugElement
                .query(By.css("a"))
                .nativeElement.getAttribute("href");

            expect(href).toEqual("/pokemon/6");
        });

        it("should display this pokemon's sprite on a img tag", () => {
            let src = fixture.nativeElement
                .querySelector("img#pokemon")
                .getAttribute("src");

            expect(src).toEqual(fixture.componentInstance.pokemon.sprite);
        });

        it("should display pokemon's shiny sprite on a img tag if this pokemon won all 6 trophies", () => {
            fixture.componentInstance.trophyAmount = 6;
            fixture.detectChanges();

            let src = fixture.nativeElement
                .querySelector("img#pokemon")
                .getAttribute("src");

            expect(src).toEqual(fixture.componentInstance.pokemon.spriteShiny);
        });

        it("should display a div with this pokemon's types", () => {
            let divText = fixture.nativeElement.querySelector("div")
                .textContent;

            expect(divText).toEqual(" FIRE / FLYING ");
        });

        it("should display a trophy img tag for each trophy this pokemon won", () => {
            fixture.componentInstance.trophyAmount = 6;
            fixture.componentInstance.ngOnInit();
            fixture.detectChanges();

            let trophyImgs = fixture.nativeElement.querySelectorAll(
                "img.trophy"
            );

            expect(trophyImgs.length).toBe(6);
        });
    });
});
