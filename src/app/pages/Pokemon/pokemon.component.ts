import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import {
    faBolt,
    faAngleDoubleUp,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faFan
} from "@fortawesome/free-solid-svg-icons";

import { PokemonService } from "./../../services/pokemon.service";
import { TrophyService } from "./../../services/trophy.service";

import { fightersIdList } from "../../utils/fightersIdList";

import { PokemonData } from "./../../classes/pokemon";

@Component({
    selector: "app-pokemon",
    templateUrl: "./pokemon.component.html",
    styleUrls: ["./pokemon.component.scss"]
})
export class PokemonComponent implements OnInit {
    // current pokemon
    id = Number(this.route.snapshot.paramMap.get("id"));
    pokemon: PokemonData;
    isFighter: boolean;
    isMoveStab: boolean[] = [];
    // page status
    isLoading: boolean = true;
    isBattleLoading: boolean = false;
    error: boolean = false;
    trophyList;
    trophyArray: number[];
    // font awesome icons
    faBolt = faBolt;
    faAngleDoubleUp = faAngleDoubleUp;
    faArrowAltCircleLeft = faArrowAltCircleLeft;
    faArrowAltCircleRight = faArrowAltCircleRight;
    faFan = faFan;
    // navigation
    fightersIdList = fightersIdList;
    fighterIndex: number;
    navigationSubscription;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService,
        private router: Router,
        private trophyService: TrophyService
    ) {
        this.configSameComponentNavigation();
    }

    async ngOnInit() {
        this.handleTrophies();

        this.checkFighterId();

        await this.getPokemonData();

        if (this.isFighter) {
            this.getFighterIndex();
            this.checkMoveType();
        }
    }

    async getPokemonData() {
        // fetch current pokemon data from service
        this.isLoading = true;

        try {
            this.pokemon = await this.pokemonService.getPokemonDataById(
                this.id,
                this.isFighter
            );

            this.isLoading = false;
            this.error = false;
        } catch (e) {
            console.log(e);
            this.isLoading = false;
            this.error = true;
        }
    }

    getFighterIndex() {
        // get current pokemon's index on fighters array
        this.fighterIndex = this.fightersIdList.findIndex(
            (id) => id === this.id
        );
    }

    checkFighterId() {
        // check if current pokemon is a fighter
        this.isFighter = Boolean(
            this.fightersIdList.find((id) => id === this.id)
        );
    }

    checkMoveType() {
        // check moves with same type attack bonus
        this.isMoveStab = this.pokemon.moves.map((move) =>
            Boolean(this.pokemon.types.find((type) => type === move.type))
        );
    }

    async startBattle() {
        // get enemy pokemon data
        this.isBattleLoading = true;

        let idList = fightersIdList.filter((id) => id !== this.id);

        let randomPokemonId = idList[Math.floor(Math.random() * idList.length)];

        let enemyPokemon = await this.pokemonService.getPokemonDataById(
            randomPokemonId,
            true
        );

        this.isBattleLoading = false;

        // time to battle!
        this.router.navigateByUrl("/battle", {
            state: {
                playerPokemon: this.pokemon,
                enemyPokemon,
                playerTrophyAmount: this.trophyList[this.id],
                enemyTrophyAmount: this.trophyList[enemyPokemon.id]
            }
        });
    }

    handleTrophies() {
        // get trophies from local storage
        this.trophyList = this.trophyService.getTrophyList();

        if (!this.trophyList) {
            this.trophyList = this.trophyService.setInitialTrophyList();
        }

        this.trophyArray = [...Array(6).keys()].map((id) => id + 1);
    }

    configSameComponentNavigation() {
        // override the route reuse strategy
        this.router.routeReuseStrategy.shouldReuseRoute = function() {
            return false;
        };

        this.navigationSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnDestroy() {
        // cancel subscription
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
