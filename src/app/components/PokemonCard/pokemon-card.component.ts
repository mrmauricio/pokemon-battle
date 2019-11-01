import { Component, OnInit, Input } from "@angular/core";

import { PokemonPreview } from "./../../classes/pokemon";

@Component({
    selector: "app-pokemon-card",
    templateUrl: "./pokemon-card.component.html",
    styleUrls: ["./pokemon-card.component.scss"]
})
export class PokemonCardComponent implements OnInit {
    @Input() pokemon: PokemonPreview;
    @Input() trophyAmount: number;

    trophyArray: number[];

    constructor() {}

    ngOnInit() {
        this.trophyArray = [...Array(this.trophyAmount).keys()].map(
            (id) => id + 1
        );

        //console.log(`${this.pokemon.id} - ${this.trophyAmount}`);
    }
}
