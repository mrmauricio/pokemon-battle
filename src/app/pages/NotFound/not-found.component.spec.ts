import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { NotFoundComponent } from "./not-found.component";

describe("-------------- (component) NotFoundComponent --------------", () => {
    let fixture: ComponentFixture<NotFoundComponent>;
    let mockRouter = {
        navigate: jasmine.createSpy("navigate")
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [NotFoundComponent],
            imports: [FontAwesomeModule],
            providers: [{ provide: Router, useValue: mockRouter }]
        });

        fixture = TestBed.createComponent(NotFoundComponent);
        fixture.detectChanges();
    });

    describe(":", () => {
        it("should display a not-found image", () => {
            expect(fixture.nativeElement.querySelector("img")).toBeTruthy();
        });

        it("should have a button that redirect to home page when clicked", () => {
            fixture.nativeElement.querySelector("button").click();

            expect(mockRouter.navigate).toHaveBeenCalledWith(["/"]);
        });
    });
});
