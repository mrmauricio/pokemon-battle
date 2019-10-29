import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PokemonData, Move } from "./../../classes/pokemon";
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

    battlePhase: number;
    battleInfoText: string;
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

        this.setInitialState();

        console.log(this.playerPokemon);
        console.log(this.enemyPokemon);
    }

    setInitialState() {
        this.battlePhase = 1;
        this.battleInfoText = this.getBattleInfoText(
            1,
            this.playerPokemon.name,
            null
        );
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

    handleMoveSelect(move: Move) {
        console.log(move);
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
                this.battleInfoText = this.getBattleInfoText(11, null, null);

                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            // pokemon
            case 3:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(
                    12,
                    this.playerPokemon.name,
                    null
                );

                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            case 4:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(13, null, null);

                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            default:
                break;
        }
    }

    // format data

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
