import {
    MainPageSection,
    Title,
    ButtonList,
    Button
} from "./main-page-section";

describe("(class) Main Section Classes", () => {
    describe(":", () => {
        it("should be possible to create an instance of each class", () => {
            const instances = [
                new MainPageSection(),
                new Title(),
                new ButtonList(),
                new Button()
            ];

            for (let i = 0; i < instances.length; i++) {
                expect(instances[i]).toBeTruthy();
            }
        });
    });
});
