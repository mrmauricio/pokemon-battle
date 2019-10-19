import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Pokemon } from "../classes/pokemon";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    private baseUrl: string = "https://pokeapi.co/api/v2/pokemon";

    async getPokemonByIdList(idArray: number[]) {
        const pokeArray: Promise<Pokemon[]> = Promise.all(
            idArray.map(async (id) => {
                const data: any = await this.http
                    .get(`${this.baseUrl}/${id}`)
                    .toPromise();

                //console.log(data);

                const pokemon: Pokemon = {
                    id: data.id,
                    sprite: data.sprites.front_default,
                    name: data.name,
                    types: data.types.reverse()
                };
                return pokemon;
            })
        );

        return pokeArray;
    }
}
