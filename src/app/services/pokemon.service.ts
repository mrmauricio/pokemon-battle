import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Pokemon } from "../classes/pokemon";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) {}
}
