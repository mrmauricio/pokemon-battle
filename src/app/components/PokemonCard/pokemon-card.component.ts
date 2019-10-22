import { Component, OnInit, Input } from "@angular/core";

import { PokemonPreview } from "./../../classes/pokemon";

@Component({
    selector: "app-pokemon-card",
    templateUrl: "./pokemon-card.component.html",
    styleUrls: ["./pokemon-card.component.scss"]
})
export class PokemonCardComponent implements OnInit {
    @Input() pokemon: PokemonPreview;

    constructor() {}

    ngOnInit() {}
}
