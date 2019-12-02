import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe("-------------- (component) HeaderComponent --------------", () => {
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent]
        });
        fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should render header", () => {
            expect(fixture.nativeElement.querySelector("header")).toBeTruthy();
        });

        it("should contain an anchor to home page", () => {
            let href = fixture.nativeElement
                .querySelector("a")
                .getAttribute("routerLink");

            expect(href).toBe("");
        });
    });
});
