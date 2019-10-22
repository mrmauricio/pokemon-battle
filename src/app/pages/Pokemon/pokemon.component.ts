import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./../../services/pokemon.service";

import { fightersIdList } from "../../utils/fightersIdList";

import { PokemonData, PokemonPreview } from "./../../classes/pokemon";

@Component({
    selector: "app-pokemon",
    templateUrl: "./pokemon.component.html",
    styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
    id = Number(this.route.snapshot.paramMap.get("id"));
    pokemon: PokemonData | PokemonPreview;
    isFighter: boolean;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    async ngOnInit() {
        this.pokemon = await this.pokemonService.getPokemonById(this.id, false);
        console.log(this.pokemon);
        this.checkFighterId();
    }

    checkFighterId() {
        this.isFighter = Boolean(fightersIdList.find((id) => id === this.id));
    }
}
