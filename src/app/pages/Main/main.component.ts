import { Component, OnInit } from "@angular/core";
import { faFan, faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

import { PokemonService } from "../../services/pokemon.service";

import { Pokemon } from "../../classes/pokemon";
import { pokemonIdList } from "../../utils/pokemonIdList";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    pokemonList: Pokemon[] = [];
    pokemonIdList = pokemonIdList;

    isLoading: boolean = false;
    error: boolean = false;

    faFan = faFan;
    faExclamationTriangle = faExclamationTriangle

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.fetchPokemon(this.pokemonIdList);
    }

    async fetchPokemon(pokemonIdList: number[]): Promise<void> {
        this.isLoading = true;

        try {
            let data = await this.pokemonService.getPokemon(pokemonIdList);

            this.isLoading = false;
            this.pokemonList = data;
            this.error = false;
            console.log(this.pokemonList);
        } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.error = true;
        }
    }
}
