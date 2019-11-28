import {
    PokemonPreview,
    PokemonData,
    Sprites,
    Move,
    Stats,
    MoveList
} from "./pokemon";

describe("(class) Pokémon Classes", () => {
    describe(":", () => {
        it("should be possible to create an instance of each class", () => {
            const instances = [
                new PokemonPreview(),
                new PokemonData(),
                new Sprites(),
                new Move(),
                new Stats(),
                new MoveList()
            ];

            for (let i = 0; i < instances.length; i++) {
                expect(instances[i]).toBeTruthy();
            }
        });
    });
});
