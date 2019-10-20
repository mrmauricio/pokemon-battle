import { Component, OnInit } from "@angular/core";
import {
    faFan,
    faExclamationTriangle,
    faBolt,
    faFileAlt
} from "@fortawesome/free-solid-svg-icons";

import { PokemonService } from "../../services/pokemon.service";

import { MainPageSection } from "../../classes/main-page-section";
import { fightersIdList } from "../../utils/fightersIdList";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    fightersIdList = fightersIdList;
    pokedexList: number[] = [...Array(13).keys()].slice(1);

    sections: MainPageSection[] = [
        {
            // first section: fighters
            id: 1,
            title: { name: "Choose your Fighter", icon: faBolt },
            pokemonList: [],
            isLoading: false,
            error: false,
            buttonList: { buttons: [], isLoading: false }
        },
        {
            // second section: pokedex
            id: 2,
            title: { name: "Learn about other Pokémon", icon: faFileAlt },
            pokemonList: [],
            isLoading: false,
            error: false,
            buttonList: { buttons: [{ name: "Load more" }], isLoading: false }
        }
    ];

    faFan = faFan;
    faExclamationTriangle = faExclamationTriangle;

    constructor(private pokemonService: PokemonService) {}

    ngOnInit() {
        // fetch first section data:
        this.fetchPokemonByIdList(this.fightersIdList, 1, false);

        // fetch second section data:
        this.fetchPokemonByIdList(this.pokedexList, 2, false);
    }

    async fetchPokemonByIdList(
        fightersIdList: number[],
        sectionId: number,
        returnData: boolean
    ) {
        let section = this.sections.find((section) => section.id === sectionId);

        section.isLoading = true;

        try {
            let data = await this.pokemonService.getPokemonByIdList(
                fightersIdList
            );

            section.isLoading = false;
            section.error = false;

            if (returnData) {
                return data;
            }

            section.pokemonList = data;
        } catch (e) {
            console.log(e);
            section.isLoading = false;
            section.error = true;
        }
    }

    async handlePokedexLoad(sectionId: number) {
        let section = this.sections.find((section) => section.id === sectionId);

        section.buttonList.isLoading = true;

        let lastPokemonId = this.pokedexList[this.pokedexList.length - 1];

        let newPokedexList: number[] = [...Array(12).keys()].map(
            (id) => id + 1 + lastPokemonId
        );

        let data = await this.fetchPokemonByIdList(
            newPokedexList,
            sectionId,
            true
        );

        this.pokedexList = this.pokedexList.concat(newPokedexList);
        section.pokemonList = section.pokemonList.concat(data);

        section.buttonList.isLoading = false;
    }
}
