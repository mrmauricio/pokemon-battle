import { Pokemon } from "./pokemon";

describe("Pokemon", () => {
    it("should create an instance", () => {
        expect(new Pokemon()).toBeTruthy();
    });
});
