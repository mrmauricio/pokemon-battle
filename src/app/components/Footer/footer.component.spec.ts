import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FooterComponent } from "./footer.component";

describe("-------------- (component) FooterComponent --------------", () => {
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent],
            imports: [FontAwesomeModule]
        });
        fixture = TestBed.createComponent(FooterComponent);
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should render footer", () => {
            expect(fixture.nativeElement.querySelector("footer")).toBeTruthy();
        });

        it("should contain an anchor to my github page", () => {
            let href = fixture.nativeElement
                .querySelector("a")
                .getAttribute("href");

            expect(href).toContain("https://github.com/mrmauricio");
        });
    });
});
