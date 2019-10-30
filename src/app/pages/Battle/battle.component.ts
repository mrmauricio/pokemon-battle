import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { PokemonData, Move } from "./../../classes/pokemon";
import { Text, Fighter, Colors } from "./../../classes/battle";

import { mockPokemon, mockPokemon2 } from "./mockPokemon";
import { typeEffectiveness } from "src/app/utils/typeEffectiveness";

@Component({
    selector: "app-battle",
    templateUrl: "./battle.component.html",
    styleUrls: ["./battle.component.scss"]
})
export class BattleComponent implements OnInit {
    playerPokemon: Fighter;
    enemyPokemon: Fighter;

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

    colors: Colors = {
        yellow: "#cccf00",
        green: "#35aa31",
        red: "#d95f5f"
    };

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
            this.playerPokemon.name
        );
    }

    getBattleInfoText(
        id: number,
        pokemonName: string = null,
        moveName: string = null,
        effectiveness: number = 1
    ) {
        let battleInfo: Text[] = [
            { id: 0, name: "" },
            { id: 1, name: `What will ${pokemonName} do?` },
            { id: 2, name: `${pokemonName} used ${moveName}! ` },
            { id: 3, name: `It's super effective!` },
            { id: 4, name: `It's ultra effective!` },
            { id: 5, name: `It's not very effective...` },
            { id: 6, name: `It's extremely ineffective...` },
            { id: 7, name: `It does not affect the opponent...` },
            { id: 11, name: "You have no items on your bag" },
            { id: 12, name: `${pokemonName} is your only Pokémon` },
            { id: 13, name: "Can't escape!" }
        ];

        function getInfoName(id: number) {
            return battleInfo.find((info) => info.id === id).name;
        }

        let info = getInfoName(id);

        switch (effectiveness) {
            case 1:
                break;
            case 2:
                info = info + getInfoName(3);
                break;
            case 4:
                info = info + getInfoName(4);
                break;
            case 0.5:
                info = info + getInfoName(5);
                break;
            case 0.25:
                info = info + getInfoName(6);
                break;
            case 0:
                info = info + getInfoName(7);
                break;
            default:
                break;
        }

        return info;
    }

    handleMoveSelect(playerMove: Move) {
        console.log(
            `player move:  ${playerMove.name}, power:  ${playerMove.power}`
        );

        // enemy select a move
        let enemyMove = this.handleEnemyMove();

        this.enterBattlePhase(playerMove, enemyMove);
    }

    calculatePercentage(pokemon: Fighter) {
        let remainingHp = (100 * pokemon.status.currentHp) / pokemon.stats.hp;

        if (remainingHp < 50 && remainingHp > 20) {
            pokemon.status.currentHpColor = this.colors.yellow;
        }

        if (remainingHp < 20) {
            pokemon.status.currentHpColor = this.colors.red;
        }

        pokemon.status.currentHpPercentage = remainingHp;
    }

    enterBattlePhase(playerMove: Move, enemyMove: Move) {
        let firstAttacker,
            firstAttackerMove,
            secondAttacker,
            secondAttackerMove;

        // decide who attacks first
        if (this.playerPokemon.stats.speed >= this.enemyPokemon.stats.speed) {
            firstAttacker = this.playerPokemon;
            firstAttackerMove = playerMove;
            secondAttacker = this.enemyPokemon;
            secondAttackerMove = enemyMove;
        } else {
            firstAttacker = this.enemyPokemon;
            firstAttackerMove = enemyMove;
            secondAttacker = this.playerPokemon;
            secondAttackerMove = playerMove;
        }

        // first attack!
        firstAttacker.status.startAttack = true;

        let firstAttackerMoveEffectiveness = this.calculateTypeEffectiveness(
            firstAttackerMove,
            secondAttacker
        );

        this.battlePhase = 3;
        this.battleInfoText = this.getBattleInfoText(
            2,
            firstAttacker.name,
            firstAttackerMove.name,
            firstAttackerMoveEffectiveness
        );

        firstAttacker.status.currentAttackEffectiveness = this.getBattleInfoText(
            0,
            null,
            null,
            firstAttackerMoveEffectiveness
        );

        firstAttacker.status.damageDealt = this.calculateDamage(
            firstAttacker,
            secondAttacker,
            firstAttackerMove
        );

        secondAttacker.status.currentHp =
            secondAttacker.status.currentHp - firstAttacker.status.damageDealt;

        this.calculatePercentage(secondAttacker);

        // second attack!
        setTimeout(() => {
            firstAttacker.status.startAttack = false;
            secondAttacker.status.startAttack = true;

            let secondAttackerMoveEffectiveness = this.calculateTypeEffectiveness(
                secondAttackerMove,
                firstAttacker
            );

            this.battleInfoText = this.getBattleInfoText(
                2,
                secondAttacker.name,
                secondAttackerMove.name,
                secondAttackerMoveEffectiveness
            );

            secondAttacker.status.currentAttackEffectiveness = this.getBattleInfoText(
                0,
                null,
                null,
                secondAttackerMoveEffectiveness
            );

            secondAttacker.status.damageDealt = this.calculateDamage(
                secondAttacker,
                firstAttacker,
                secondAttackerMove
            );

            firstAttacker.status.currentHp =
                firstAttacker.status.currentHp -
                secondAttacker.status.damageDealt;

            this.calculatePercentage(firstAttacker);

            setTimeout(() => {
                secondAttacker.status.startAttack = false;
                this.setInitialState();
            }, this.waitTime);
        }, this.waitTime);

        console.log(secondAttacker.status.currentHp);
        console.log(this.playerPokemon.stats.hp);
    }

    handleEnemyMove() {
        let randomMove = this.enemyPokemon.moves[
            Math.floor(Math.random() * this.enemyPokemon.moves.length)
        ];
        console.log(
            `enemy move:  ${randomMove.name}, power:  ${randomMove.power}`
        );

        return randomMove;
    }

    calculateDamage(attacker: Fighter, defender: Fighter, move: Move) {
        let stabMultiplier: number = 1;

        if (attacker.types.find((type) => type === move.type)) {
            stabMultiplier = 1.25;
        }

        let typeMultiplier: number = this.calculateTypeEffectiveness(
            move,
            defender
        );

        console.log(`${attacker.name} attacked ${defender.name}`);
        console.log("type multiplier: " + typeMultiplier);

        let damage = Math.round(
            0.5 *
                move.power *
                (attacker.stats.attack / defender.stats.defense) *
                typeMultiplier *
                stabMultiplier
        );

        console.log(`${attacker.name} dealt ${damage} damage`);

        return damage;
    }

    calculateTypeEffectiveness(move: Move, defender: Fighter) {
        return defender.types.reduce((acc, type) => {
            return acc * typeEffectiveness[move.type][type];
        }, 1);
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
                this.battleInfoText = this.getBattleInfoText(11);

                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            // pokemon
            case 3:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(
                    12,
                    this.playerPokemon.name
                );

                setTimeout(() => {
                    this.setInitialState();
                }, this.waitTime);
                break;
            case 4:
                this.battlePhase = 3;
                this.battleInfoText = this.getBattleInfoText(13);

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
            id: pokemon.id,
            sprites: pokemon.sprites,
            name: this.capitalizeFirstLetter(pokemon.name),
            types: pokemon.types,
            moves: pokemon.moves.map((move) => {
                move.name = this.capitalizeFirstLetter(move.name);
                return move;
            }),
            stats: pokemon.stats,
            status: {
                startAttack: false,
                currentAttackEffectiveness: "",
                damageDealt: 0,
                currentHp: pokemon.stats.hp,
                currentHpPercentage: 100,
                currentHpColor: this.colors.green,
                isAlive: true
            }
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
