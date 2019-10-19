import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { fightersIdList } from "../../utils/fightersIdList";

@Component({
    selector: "app-pokemon",
    templateUrl: "./pokemon.component.html",
    styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
    id = Number(this.route.snapshot.paramMap.get("id"));
    isFighter: boolean;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        console.log(this.id);
        this.checkFighterId();
    }

    checkFighterId() {
        this.isFighter = Boolean(fightersIdList.find((id) => id === this.id));
    }
}
