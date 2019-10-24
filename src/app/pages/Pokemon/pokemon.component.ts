import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

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
    isLoading: boolean = true;
    error: boolean = false;

    faBolt = faBolt;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService
    ) {}

    async ngOnInit() {
        this.checkFighterId();

        this.getPokemonData(this.id, this.isFighter);
    }

    async getPokemonData(id: number, isFighter: boolean) {
        this.isLoading = true;

        try {
            this.pokemon = await this.pokemonService.getPokemonDataById(
                id,
                isFighter
            );

            console.log(this.pokemon);

            this.isLoading = false;
            this.error = false;
        } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.error = true;
        }
    }

    checkFighterId() {
        this.isFighter = Boolean(fightersIdList.find((id) => id === this.id));
    }
}
