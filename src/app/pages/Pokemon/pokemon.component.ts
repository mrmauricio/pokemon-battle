import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import {
    faBolt,
    faAngleDoubleUp,
    faArrowAltCircleLeft,
    faArrowAltCircleRight
} from "@fortawesome/free-solid-svg-icons";

import { PokemonService } from "./../../services/pokemon.service";

import { fightersIdList } from "../../utils/fightersIdList";

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
    isMoveStab: boolean[] = [];

    isLoading: boolean = true;
    error: boolean = false;

    faBolt = faBolt;
    faAngleDoubleUp = faAngleDoubleUp;
    faArrowAltCircleLeft = faArrowAltCircleLeft;
    faArrowAltCircleRight = faArrowAltCircleRight;

    fightersIdList = fightersIdList;
    fighterIndex: number;
    navigationSubscription;

    constructor(
        private route: ActivatedRoute,
        private pokemonService: PokemonService,
        private router: Router
    ) {
        this.configSameComponentNavigation();
    }

    async ngOnInit() {
        this.checkFighterId();

        await this.getPokemonData();

        if (this.isFighter) {
            this.getFighterIndex();
            this.checkMoveType();
        }
    }

    async getPokemonData() {
        this.isLoading = true;

        try {
            this.pokemon = await this.pokemonService.getPokemonDataById(
                this.id,
                this.isFighter
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

    getFighterIndex() {
        this.fighterIndex = this.fightersIdList.findIndex(
            (id) => id === this.id
        );
    }

    checkFighterId() {
        this.isFighter = Boolean(
            this.fightersIdList.find((id) => id === this.id)
        );
    }

    checkMoveType() {
        this.isMoveStab = this.pokemon.moves.map((move) =>
            Boolean(this.pokemon.types.find((type) => type === move.type))
        );
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
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
