import { Injectable } from "@angular/core";

import { fightersIdList } from "./../utils/fightersIdList";

@Injectable({
    providedIn: "root"
})
export class TrophyService {
    constructor() {}

    // ---------------------------- //
    // HANDLE POKEMON TROPHIES      //
    // ---------------------------- //

    getTrophyList() {
        return JSON.parse(localStorage.getItem("trophyList"));
    }

    setTrophyList(newTrophyList) {
        localStorage.setItem("trophyList", JSON.stringify(newTrophyList));
    }

    setInitialTrophyList() {
        // creating an object with fighterId as property
        let initialTrophies = fightersIdList.reduce((newObj, id) => {
            newObj[id] = 0;

            return newObj;
        }, {});

        this.setTrophyList(initialTrophies);

        return initialTrophies;
    }

    addTrophyById(id) {
        let newTrophyList = this.getTrophyList();

        if (newTrophyList[id] < 6) {
            newTrophyList[id]++;
        }

        this.setTrophyList(newTrophyList);
    }
}
