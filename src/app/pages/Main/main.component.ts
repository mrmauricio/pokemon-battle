import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
    faBolt,
    faGraduationCap,
    faQuestion,
    faPlus
} from "@fortawesome/free-solid-svg-icons";

import { PokemonService } from "../../services/pokemon.service";
import { TrophyService } from "./../../services/trophy.service";

import { MainPageSection, Button } from "../../classes/main-page-section";
import { fightersIdList } from "../../utils/fightersIdList";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
    // initial IDs to fetch
    fightersIdList = fightersIdList;
    pokedexList: number[] = [...Array(12).keys()].map(id => id + 1);

    trophyList;

    buttons: Button[] = [
        {
            id: 1,
            name: "Load more",
            function: (sectionId: number) => {
                this.handlePokedexLoad(sectionId);
            },
            icon: faPlus
        },
        {
            id: 2,
            name: "Pick Random",
            function: (sectionId: number) => {
                this.handleRandomSelection(sectionId, false);
            },
            icon: faQuestion
        },
        {
            id: 3,
            name: "Pick Random",
            function: (sectionId: number) => {
                this.handleRandomSelection(sectionId, true);
            },
            icon: faQuestion
        }
    ];

    sections: MainPageSection[] = [
        {
            // first section: fighters
            id: 1,
            title: { name: "Choose your Fighter", icon: faBolt },
            pokemonList: [],
            isLoading: false,
            error: false,
            buttonList: {
                buttons: [this.getButtonById(3)],
                isLoading: false
            }
        },
        {
            // second section: pokedex
            id: 2,
            title: { name: "Learn about other Pokémon", icon: faGraduationCap },
            pokemonList: [],
            isLoading: false,
            error: false,
            buttonList: {
                buttons: [this.getButtonById(1), this.getButtonById(2)],
                isLoading: false
            }
        }
    ];

    constructor(
        private pokemonService: PokemonService,
        private router: Router,
        private trophyService: TrophyService
    ) {}

    ngOnInit() {
        // if there's no data on local storage, set initial values
        this.handleTrophies();

        // fetch first section data:
        this.fetchPokemonByIdList(this.fightersIdList, 1, false);

        // fetch second section data:
        this.fetchPokemonByIdList(this.pokedexList, 2, false);
    }

    async fetchPokemonByIdList(
        idList: number[],
        sectionId: number,
        shouldReturn: boolean
    ) {
        let section = this.getSectionById(sectionId);

        section.isLoading = true;

        try {
            let data = await this.pokemonService.getPokemonPreviewByIdList(
                idList
            );

            section.isLoading = false;
            section.error = false;

            if (shouldReturn) {
                return data;
            }

            section.pokemonList = data;
        } catch (e) {
            //console.log(e);
            section.isLoading = false;
            section.error = true;
        }
    }

    async handlePokedexLoad(sectionId: number) {
        let section = this.getSectionById(sectionId);

        section.buttonList.isLoading = true;

        let lastPokemonId =
            section.pokemonList[section.pokemonList.length - 1].id;

        let newPokedexList: number[] = [...Array(12).keys()].map(
            // plus 1 because it starts on 0
            id => id + lastPokemonId + 1
        );

        let data = await this.fetchPokemonByIdList(
            newPokedexList,
            sectionId,
            true
        );

        section.pokemonList = section.pokemonList.concat(data);
        section.buttonList.isLoading = false;
    }

    handleRandomSelection(sectionId: number, onlyFighters: boolean) {
        let randomPokemonId: number;

        if (onlyFighters) {
            let section = this.getSectionById(sectionId);

            let idList = section.pokemonList.map(pokemon => pokemon.id);

            randomPokemonId = idList[Math.floor(Math.random() * idList.length)];
        } else {
            randomPokemonId = Math.floor(Math.random() * 151) + 1;
        }

        this.router.navigate(["/pokemon", randomPokemonId]);
    }

    handleTrophies() {
        this.trophyList = this.trophyService.getTrophyList();

        if (!this.trophyList) {
            this.trophyList = this.trophyService.setInitialTrophyList();
        }
    }

    getButtonById(id: number) {
        return this.buttons.find(button => button.id === id);
    }

    getSectionById(id: number) {
        return this.sections.find(section => section.id === id);
    }
}
