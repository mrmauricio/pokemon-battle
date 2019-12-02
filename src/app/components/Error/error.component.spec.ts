import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ErrorComponent } from "./error.component";

describe("-------------- (component) ErrorComponent --------------", () => {
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            imports: [FontAwesomeModule]
        });
        fixture = TestBed.createComponent(ErrorComponent);
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should render a div with a warning", () => {
            expect(fixture.nativeElement.querySelector("div")).toBeTruthy();
        });

        it("should contain an anchor to the api url", () => {
            let href = fixture.nativeElement
                .querySelector("a")
                .getAttribute("href");

            expect(href).toContain("https://pokeapi.co/");
        });
    });
});
