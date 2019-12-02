import { TestBed, fakeAsync } from "@angular/core/testing";
import {
    HttpClientTestingModule,
    HttpTestingController
} from "@angular/common/http/testing";

import { PokemonService } from "./pokemon.service";

import { mockUnformattedStats } from "../mocks/mockUnformattedStats";
import { mockUnformattedPokemon } from "../mocks/mockUnformattedPokemon";
import { mockUnformattedMove } from "../mocks/mockUnformattedMove";

import { movesIdList } from "./../utils/movesIdList";

describe("-------------- (service) PokemonService --------------", () => {
    let httpTestingController: HttpTestingController;
    let service: PokemonService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [PokemonService],
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
        service = TestBed.get(PokemonService);
    });

    describe("getPokemonPreviewById:", () => {
        let pokemon;
        let hasExpectedProperties: boolean;

        beforeEach(() => {
            hasExpectedProperties = true;
            pokemon = mockUnformattedPokemon;
        });

        it("should make one GET request and return the expected object with the expected properties", fakeAsync(() => {
            let expectedProperties = ["id", "sprite", "spriteShiny", "types"];

            service.getPokemonPreviewById(6).then(res => {
                expect(res.name).toBe("charizard");

                for (let i = 0; i < expectedProperties.length; i++) {
                    if (!res.hasOwnProperty(expectedProperties[i])) {
                        hasExpectedProperties = false;
                    }
                }

                expect(hasExpectedProperties).toBe(true);

                httpTestingController.verify();
            });

            const req = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/pokemon/6"
            );

            req.flush(pokemon);
        }));
    });

    describe("getPokemonPreviewByIdList:", () => {
        let pokemon;

        beforeEach(() => {
            pokemon = mockUnformattedPokemon;
        });

        it("should make one GET request for each id on array and return an array of objects", fakeAsync(() => {
            let idArray = [3, 6];
            let nameArray = ["venusaur", "charizard"];

            service.getPokemonPreviewByIdList(idArray).then(res => {
                expect(res.length).toBe(2);

                for (let i = 0; i < res.length; i++) {
                    expect(res[i].name).toBe(nameArray[i]);
                }

                httpTestingController.verify();
            });

            const req1 = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/pokemon/3"
            );
            req1.flush({ ...pokemon, name: "venusaur" });

            const req2 = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/pokemon/6"
            );
            req2.flush(pokemon);
        }));
    });

    describe("getPokemonDataById", () => {
        let pokemon;
        let hasExpectedProperties: boolean;

        beforeEach(() => {
            hasExpectedProperties = true;
            pokemon = mockUnformattedPokemon;

            spyOn(service, "formatStats").and.returnValue({
                attack: 109,
                defense: 85,
                hp: 356,
                speed: 100
            });

            spyOn(service, "getMoveByIdList").and.returnValue(
                Promise.resolve([
                    { name: "flamethrower", text: "a", type: "a", power: 1 },
                    { name: "flamethrower", text: "a", type: "a", power: 1 },
                    { name: "flamethrower", text: "a", type: "a", power: 1 },
                    { name: "flamethrower", text: "a", type: "a", power: 1 }
                ])
            );
        });

        it("should make one GET request and, if fighter, return the expected object with the expected properties", fakeAsync(() => {
            let expectedProperties = [
                "id",
                "sprites",
                "abilities",
                "types",
                "height",
                "moves",
                "stats"
            ];

            service.getPokemonDataById(6, true).then(res => {
                expect(res.name).toBe("charizard");

                for (let i = 0; i < expectedProperties.length; i++) {
                    if (!res.hasOwnProperty(expectedProperties[i])) {
                        hasExpectedProperties = false;
                    }
                }

                expect(hasExpectedProperties).toBe(true);
                expect(res.moves.length).toBe(4);
                expect(res.stats).toBeTruthy;

                httpTestingController.verify();
            });

            const req = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/pokemon/6"
            );

            req.flush(pokemon);

            // mock funcao de retornar moves e stats
        }));

        it("should make one GET request and, if not a fighter, return the expected object  with the expected properties", fakeAsync(() => {
            let expectedProperties = [
                "id",
                "sprites",
                "abilities",
                "types",
                "height",
                "moves",
                "stats"
            ];

            service.getPokemonDataById(6, false).then(res => {
                expect(res.name).toBe("charizard");

                for (let i = 0; i < expectedProperties.length; i++) {
                    if (!res.hasOwnProperty(expectedProperties[i])) {
                        hasExpectedProperties = false;
                    }
                }

                expect(hasExpectedProperties).toBe(true);
                expect(res.moves.length).toBe(0);
                expect(res.stats).toBe(undefined);

                httpTestingController.verify();
            });

            const req = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/pokemon/6"
            );

            req.flush(pokemon);
        }));
    });

    describe("getMoveById:", () => {
        let move;

        beforeEach(() => {
            move = mockUnformattedMove;
        });

        it("should make one GET request and return the expected object", fakeAsync(() => {
            service.getMoveById(53).then(res => {
                expect(res.name).toBe("flamethrower");

                httpTestingController.verify();
            });

            const req = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/move/53"
            );

            req.flush(move);
        }));
    });

    describe("getMoveByIdList:", () => {
        let move;

        beforeEach(() => {
            move = mockUnformattedMove;
        });

        it("should make one GET request for each id on array and return an array of objects", fakeAsync(() => {
            let idArray = [53, 403];
            let nameArray = ["flamethrower", "air slash"];

            service.getMoveByIdList(idArray).then(res => {
                expect(res.length).toBe(2);

                for (let i = 0; i < res.length; i++) {
                    expect(res[i].name).toBe(nameArray[i]);
                }

                httpTestingController.verify();
            });

            const req1 = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/move/53"
            );
            req1.flush(move);

            const req2 = httpTestingController.expectOne(
                "https://pokeapi.co/api/v2/move/403"
            );
            req2.flush({ ...move, name: "air-slash" });
        }));
    });

    describe("formatStats:", () => {
        let stats;

        beforeEach(() => {
            stats = mockUnformattedStats;
        });

        it("should not return special attack and special defense values", () => {
            const data = service.formatStats(stats);

            expect(data["special-attack"]).toBe(undefined);
            expect(data["special-defense"]).toBe(undefined);
        });

        it("should return an attack property equal to original attack value if it's higher than special attack", () => {
            //special-attack
            stats[2].base_stat = 100;
            //attack
            stats[4].base_stat = 200;

            const data = service.formatStats(stats);

            expect(data.attack).toBe(200);
        });

        it("should return an attack property equal to original attack value if it's lower than special attack", () => {
            //special-attack
            stats[2].base_stat = 100;
            //attack
            stats[4].base_stat = 50;

            const data = service.formatStats(stats);

            expect(data.attack).toBe(100);
        });

        it("should return an defense property equal to original defense value if it's lower than special defense", () => {
            //special-defense
            stats[1].base_stat = 100;
            //defense
            stats[3].base_stat = 50;

            const data = service.formatStats(stats);

            expect(data.defense).toBe(100);
        });

        it("should return an defense property equal to original defense value if it's lower than special defense", () => {
            //special-defense
            stats[1].base_stat = 100;
            //defense
            stats[3].base_stat = 200;

            const data = service.formatStats(stats);

            expect(data.defense).toBe(200);
        });
    });
});
