import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { LoadingComponent } from "./loading.component";

describe("-------------- (component) LoadingComponent --------------", () => {
    let fixture: ComponentFixture<LoadingComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoadingComponent],
            imports: [FontAwesomeModule]
        });
        fixture = TestBed.createComponent(LoadingComponent);
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should render a div with a spinner", () => {
            expect(fixture.nativeElement.querySelector("fa-icon")).toBeTruthy();
        });
    });
});
