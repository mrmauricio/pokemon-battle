import { Component, OnInit } from "@angular/core";

import { PokemonService } from "../../services/pokemon.service";

import { Pokemon } from "../../classes/pokemon";

@Component({
    selector: "app-main",
    templateUrl: "./main.component.html",
    styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {}
