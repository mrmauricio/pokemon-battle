import { Text, Colors, Fighter, BattleStatus } from "./battle";

describe("-------------- (class) Battle Classes --------------", () => {
    describe(":", () => {
        it("should be possible to create an instance of each class", () => {
            const instances = [
                new Text(),
                new Colors(),
                new Fighter(),
                new BattleStatus()
            ];

            for (let i = 0; i < instances.length; i++) {
                expect(instances[i]).toBeTruthy();
            }
        });
    });
});
