import { Component, OnInit, ɵConsole } from "@angular/core";
import { Router } from "@angular/router";

import { TrophyService } from "./../../services/trophy.service";

import { PokemonData, Move } from "./../../classes/pokemon";
import { Text, Fighter, Colors } from "./../../classes/battle";

//import { mockPokemon, mockPokemon2 } from "./mockPokemon";
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
    waitTime: number = 2500;
    battleMusic;
    playerTrophyAmount: number = history.state.playerTrophyAmount;
    enemyTrophyAmount: number = history.state.enemyTrophyAmount;

    battlePhases: number[] = [
        1, // option select
        2, // move select
        3, // waiting
        4 // ended
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

    constructor(private router: Router, private trophyService: TrophyService) {}

    // ---------------------------- //
    // INITIAL CONFIG FUNCTIONS     //
    // ---------------------------- //

    ngOnInit() {
        // get data passed as state on route redirection
        this.getFightersData();
    }

    getFightersData() {
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

            // set initial battle phase and initial text
            this.setInitialState();

            // start battle music
            this.playAudio();
        } else {
            this.router.navigateByUrl("/404");
            // test:
            //this.playerPokemon = this.formatPokemonData(mockPokemon);
            //this.enemyPokemon = this.formatPokemonData(mockPokemon2);
            //this.setInitialState();
        }
    }

    setInitialState() {
        this.battlePhase = 1;
        this.battleInfoText = this.getBattleInfoText(
            1,
            this.playerPokemon.name
        );
    }

    ngOnDestroy() {
        if (this.battleMusic) {
            this.battleMusic.pause();
        }
    }

    // ---------------------------- //
    // BATTLE FUNCTIONS             //
    // ---------------------------- //

    handleMoveSelect(playerMove: Move) {
        let enemyMove = this.handleEnemyMove();

        // start battle after player and enemy selected their moves
        this.enterBattlePhase(playerMove, enemyMove);
    }

    handleEnemyMove() {
        let randomMove = this.enemyPokemon.moves[
            Math.floor(Math.random() * this.enemyPokemon.moves.length)
        ];

        return randomMove;
    }

    enterBattlePhase(playerMove: Move, enemyMove: Move) {
        let firstAttacker,
            firstAttackerMove,
            secondAttacker,
            secondAttackerMove;

        this.battlePhase = 3;

        // decide who attacks first based on speed stat
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
        this.startAttack(firstAttacker, firstAttackerMove, secondAttacker);

        // second attack!

        setTimeout(() => {
            firstAttacker.status.startAttack = false;

            if (secondAttacker.status.isAlive) {
                this.startAttack(
                    secondAttacker,
                    secondAttackerMove,
                    firstAttacker
                );

                setTimeout(() => {
                    secondAttacker.status.startAttack = false;

                    if (firstAttacker.status.isAlive) {
                        this.setInitialState();
                    }
                }, this.waitTime);
            }
        }, this.waitTime);
    }

    startAttack(attacker: Fighter, attackerMove: Move, defender: Fighter) {
        attacker.status.startAttack = true;

        // check selected move effectiveness on target
        let attackerMoveEffectiveness = this.calculateTypeEffectiveness(
            attackerMove,
            defender
        );

        // display on screen menu the attack text
        this.battleInfoText = this.getBattleInfoText(
            2,
            attacker.name,
            attackerMove.name,
            attackerMoveEffectiveness
        );

        // display on screen the move effectiveness
        attacker.status.currentAttackEffectiveness = this.getBattleInfoText(
            0,
            null,
            null,
            attackerMoveEffectiveness
        );

        // calculate damage dealt on target
        attacker.status.damageDealt = this.calculateDamage(
            attacker,
            defender,
            attackerMove
        );

        // apply damage on target's hp
        let appliedDamage =
            defender.status.currentHp - attacker.status.damageDealt;

        if (appliedDamage <= 0) {
            defender.status.currentHp = 0;
            defender.status.isAlive = false;

            setTimeout(() => {
                this.handleBattleEnd(attacker);
            }, this.waitTime);
        } else {
            defender.status.currentHp = appliedDamage;
        }

        // get damage percentage to display on screen
        this.calculatePercentage(defender);
    }

    handleBattleEnd(winner: Fighter) {
        this.battleInfoText = this.getBattleInfoText(0);

        this.battlePhase = 4;

        if (winner === this.playerPokemon) {
            this.trophyService.addTrophyById(winner.id);
        }
    }

    // ---------------------------- //
    // BATTLE CALCULATION FUNCTIONS //
    // ---------------------------- //

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

    calculateDamage(attacker: Fighter, defender: Fighter, move: Move) {
        let stabMultiplier: number = 1;

        if (attacker.types.find((type) => type === move.type)) {
            stabMultiplier = 1.25;
        }

        let typeMultiplier: number = this.calculateTypeEffectiveness(
            move,
            defender
        );

        let damage = Math.round(
            0.75 *
                move.power *
                (attacker.stats.attack / defender.stats.defense) *
                typeMultiplier *
                stabMultiplier
        );

        console.log(`--------------
${attacker.name} attacked ${defender.name} and dealt ${damage} damage.
--------------
* MOVE POWER: ${move.power * 0.75}
* ATTACK x DEFENSE: ${attacker.stats.attack} / ${
            defender.stats.defense
        } = ${attacker.stats.attack / defender.stats.defense}
* TYPE MULTIPLIER: ${typeMultiplier}
* STAB MULTIPLIER: ${stabMultiplier}
--------------`);

        return damage;
    }

    calculateTypeEffectiveness(move: Move, defender: Fighter) {
        return defender.types.reduce((acc, type) => {
            return acc * typeEffectiveness[move.type][type];
        }, 1);
    }

    // ---------------------------- //
    //  DISPLAY FUNCTIONS       //
    // ---------------------------- //

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
            // run
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

    playAudio() {
        this.battleMusic = new Audio();
        this.battleMusic.src = "assets/sounds/battle-song.ogg";
        this.battleMusic.load();
        this.battleMusic.play();
    }

    // ---------------------------- //
    // DATA FORMATTING FUNCTIONS    //
    // ---------------------------- //

    // format PokemonData instance to Fighter instance
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
