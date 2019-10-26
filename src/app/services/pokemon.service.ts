import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { PokemonPreview, PokemonData, Stat, Move } from "../classes/pokemon";
import { movesIdList } from "./../utils/movesIdList";

@Injectable({
    providedIn: "root"
})
export class PokemonService {
    constructor(private http: HttpClient) {}

    private baseUrl: string = "https://pokeapi.co/api/v2";

    async getPokemonByIdList(idArray: number[]) {
        const pokeArray = await Promise.all(
            idArray.map(async (id) => await this.getPokemonPreviewById(id))
        );

        return pokeArray;
    }

    async getPokemonPreviewById(id: number) {
        const data: any = await this.http
            .get(`${this.baseUrl}/pokemon/${id}`)
            .toPromise();

        //console.log(data);

        const pokemonPreview: PokemonPreview = {
            id: data.id,
            sprite: data.sprites.front_default,
            name: data.name,
            types: data.types.map((t) => t.type.name).reverse()
        };

        return pokemonPreview;
    }

    async getPokemonDataById(id: number, isFighter: boolean) {
        const data: any = await this.http
            .get(`${this.baseUrl}/pokemon/${id}`)
            .toPromise();

        let statArray: Stat[] = [];
        let moveArray: Move[] = [];

        if (isFighter) {
            // set pokemon stats
            statArray = this.formatStats(data.stats);

            // set pokemon moves
            let { movesId } = movesIdList.find((item) => item.pokemonId === id);

            moveArray = await this.getMoveByIdList(movesId);
        }

        const pokemon: PokemonData = {
            id: data.id,
            sprites: {
                front_default: data.sprites.front_default,
                back_default: data.sprites.back_default,
                front_shiny: data.sprites.front_shiny,
                back_shiny: data.sprites.back_shiny,
                artwork: `https://img.pokemondb.net/artwork/large/${data.name}.jpg`
            },
            name: data.name,
            types: data.types.map((t) => t.type.name).reverse(),
            abilities: data.abilities.map((a) => a.ability.name),
            height: data.height / 10,
            moves: moveArray,
            stats: statArray
        };

        return pokemon;
    }

    async getMoveByIdList(idArray: number[]) {
        const moveArray = await Promise.all(
            idArray.map(async (id) => await this.getMoveById(id))
        );

        return moveArray;
    }

    async getMoveById(id: number) {
        const data: any = await this.http
            .get(`${this.baseUrl}/move/${id}`)
            .toPromise();

        const text = data.flavor_text_entries.find(
            (item) => item.language.name === "en"
        );

        const move: Move = {
            name: data.name.replace("-", " "),
            text: text.flavor_text,
            type: data.type.name,
            power: data.power
        };

        return move;
    }

    formatStats(stats) {
        let statArray: Stat[] = stats.map((s) => {
            return {
                name: s.stat.name,
                power: s.base_stat
            };
        });

        let deleteProperties: Stat[] = [];

        const attack = statArray.find((stat) => stat.name === "attack");
        const specialAttack = statArray.find(
            (stat) => stat.name === "special-attack"
        );
        const defense = statArray.find((stat) => stat.name === "defense");
        const specialDefense = statArray.find(
            (stat) => stat.name === "special-defense"
        );

        if (attack.power >= specialAttack.power) {
            deleteProperties.push(specialAttack);
        } else {
            specialAttack.name = attack.name;
            deleteProperties.push(attack);
        }

        if (defense.power >= specialDefense.power) {
            deleteProperties.push(specialDefense);
        } else {
            specialDefense.name = defense.name;
            deleteProperties.push(defense);
        }

        deleteProperties.forEach((prop) => {
            statArray = statArray.filter((stat) => stat !== prop);
        });

        statArray = statArray.sort((a, b) => a.name.localeCompare(b.name));

        //console.log(statArray);

        return statArray;
    }
}
