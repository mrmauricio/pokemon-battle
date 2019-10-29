import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PokemonData } from "./../../classes/pokemon";
import { Text } from "./../../classes/battle";

import { mockPokemon, mockPokemon2 } from "./mockPokemon";

@Component({
    selector: "app-battle",
    templateUrl: "./battle.component.html",
    styleUrls: ["./battle.component.scss"]
})
export class BattleComponent implements OnInit {
    playerPokemon: PokemonData;
    enemyPokemon: PokemonData;

    battlePhase: number = 1;
    battleInfo: number = 1;
    waitTime: number = 2000;

    battlePhases: number[] = [
        1, // option select
        2, // move select
        3 // waiting
    ];

    battleOptions: Text[] = [
        { id: 1, name: "Fight" },
        { id: 2, name: "Bag" },
        { id: 3, name: "Pokémon" },
        { id: 4, name: "Run" }
    ];

    constructor(private router: Router) {}

    ngOnInit() {
        if (
            history.state.hasOwnProperty("enemyPokemon") &&
            history.state.hasOwnProperty("playerPokemon")
        ) {
            this.playerPokemon = this.formatPokemonData(
                history.state.playerPokemon
            );
            this.enemyPokemon = this.formatPokemonData(
                history.state.enemyPokemon
            );
        } else {
            //this.router.navigateByUrl("/404");
            this.playerPokemon = this.formatPokemonData(mockPokemon);
            this.enemyPokemon = this.formatPokemonData(mockPokemon2);
        }

        console.log(this.playerPokemon);
        console.log(this.enemyPokemon);
    }

    getBattleInfoText(id: number, pokemonName: string, moveName: string) {
        let battleInfo: Text[] = [
            { id: 1, name: `What will ${pokemonName} do?` },
            { id: 2, name: `${pokemonName} used ${moveName}! ` },
            { id: 11, name: "You have no items on your bag" },
            { id: 12, name: `${pokemonName} is your only Pokémon` },
            { id: 13, name: "Can't escape!" }
        ];

        let info = battleInfo.find((info) => info.id === id);

        return info.name;
    }

    handleOptionSelect(id: number) {
        switch (id) {
            // fight
            case 1:
                this.battlePhase = 2;
                break;
            // bag
            case 2:
                this.battlePhase = 3;
                this.battleInfo = 11;

                this.showTemporaryText(1, 1);
                break;
            // pokemon
            case 3:
                this.battlePhase = 3;
                this.battleInfo = 12;

                this.showTemporaryText(1, 1);
                break;
            case 4:
                this.battlePhase = 3;
                this.battleInfo = 13;

                this.showTemporaryText(1, 1);
                break;
            default:
                break;
        }
    }

    showTemporaryText(battlePhase: number, battleInfo: number) {
        setTimeout(() => {
            this.battlePhase = battlePhase;
            this.battleInfo = battleInfo;
        }, this.waitTime);
    }

    formatPokemonData(pokemon: PokemonData) {
        return {
            ...pokemon,
            name: this.capitalizeFirstLetter(pokemon.name),
            moves: pokemon.moves.map((move) => {
                move.name = this.capitalizeFirstLetter(move.name);
                return move;
            })
        };
    }

    capitalizeFirstLetter(str: string) {
        let strArray = str.split(" ");

        for (let i = 0, x = strArray.length; i < x; i++) {
            strArray[i] = strArray[i][0].toUpperCase() + strArray[i].substr(1);
        }

        return strArray.join(" ");
    }
}
