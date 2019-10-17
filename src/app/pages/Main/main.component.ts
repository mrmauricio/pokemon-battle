import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../../services/pokemon.service";

import { Pokemon } from "../../classes/pokemon";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    pokemon: Pokemon[] = [];
    availablePokemon: number[] = [6, 9];

    isLoading: boolean = false;
    error: boolean = false;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        this.loadPokemon(this.availablePokemon);
    }

    async loadPokemon(availablePokemon: number[]): Promise<void> {
        this.isLoading = true;

        const data = await this.pokemonService.getPokemon(availablePokemon);

        this.pokemon = data;

        console.log(this.pokemon);
    }
}
