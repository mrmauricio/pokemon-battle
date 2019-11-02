import { PokemonPreview } from "./pokemon";

describe("Pokemon", () => {
    it("should create an instance", () => {
        expect(new PokemonPreview()).toBeTruthy();
    });
});
