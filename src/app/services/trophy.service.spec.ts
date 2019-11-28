import { TestBed } from "@angular/core/testing";

import { TrophyService } from "./trophy.service";

import { fightersIdList } from "./../utils/fightersIdList";

describe("(service) TrophyService", () => {
    let service: TrophyService;
    let store, emptyTrophyList;

    beforeEach(() => {
        TestBed.configureTestingModule({});

        service = TestBed.get(TrophyService);
        store = {};
        emptyTrophyList = {
            3: 0,
            6: 0,
            9: 0
        };

        // mock local storage get and set:
        spyOn(localStorage, "getItem").and.callFake((key: string): string => {
            return store[key] || null;
        });
        spyOn(localStorage, "setItem").and.callFake(
            (key: string, value: string) => {
                store[key] = value;
            }
        );
    });

    describe("getTrophyList:", () => {
        it("should return trophy amount list", () => {
            // set
            store["trophyList"] = JSON.stringify(emptyTrophyList);

            const data = service.getTrophyList();

            expect(data).toEqual(emptyTrophyList);
        });
    });

    describe("setTrophyList:", () => {
        it("should set trophy amount list", () => {
            service.setTrophyList(emptyTrophyList);

            // get
            const data = JSON.parse(store["trophyList"]);
            expect(data).toEqual(emptyTrophyList);
        });
    });

    describe("setInitialTrophyList:", () => {
        it("should set trophy amount to zero", () => {
            let notEmptyTrophyList = { ...emptyTrophyList, 3: 5 };
            // set
            store["trophyList"] = JSON.stringify(notEmptyTrophyList);

            service.setInitialTrophyList();
            // get
            const data = JSON.parse(store["trophyList"]);

            expect(data[3]).toBe(0);
        });

        it("should include all fighters ids on the list", () => {
            service.setInitialTrophyList();

            // get
            const data = JSON.parse(store["trophyList"]);
            const ids = Object.keys(data).map(id => Number(id));
            expect(ids).toEqual(fightersIdList);
        });
    });

    describe("addTrophyById:", () => {
        it("should add one trophy to the selected fighter", () => {
            // set
            store["trophyList"] = JSON.stringify(emptyTrophyList);

            service.addTrophyById(3);

            // get
            const data = JSON.parse(store["trophyList"]);
            expect(data[3]).toBe(emptyTrophyList[3] + 1);
        });

        it("should not increase trophy amount above six", () => {
            let notEmptyTrophyList = { ...emptyTrophyList, 3: 6 };
            // set
            store["trophyList"] = JSON.stringify(notEmptyTrophyList);

            service.addTrophyById(3);

            // get
            const data = JSON.parse(store["trophyList"]);
            expect(data[3]).toBe(notEmptyTrophyList[3]);
        });
    });
});
