import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PokemonService } from "./../../services/pokemon.service";

import { fightersIdList } from "../../utils/fightersIdList";
import { movesIdList } from "../../utils/movesIdList";

import { PokemonData } from "./../../classes/pokemon";

@Component({
    selector: "app-pokemon",
    templateUrl: "./pokemon.component.html",
    styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
    id = Number(this.route.snapshot.paramMap.get("id"));
    pokemon: PokemonData;
    isFighter: boolean;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    async ngOnInit() {
        this.checkFighterId();

        this.pokemon = await this.pokemonService.getPokemonDataById(this.id);

        let { movesId } = movesIdList.find(
            (item) => item.pokemonId === this.id
        );

        this.pokemon.moves = await this.pokemonService.getMoveByIdList(movesId);

        console.log(this.pokemon);
    }

    checkFighterId() {
        this.isFighter = Boolean(fightersIdList.find((id) => id === this.id));
    }
}
