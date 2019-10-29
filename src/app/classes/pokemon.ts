export class PokemonPreview {
    id: number;
    sprite: string;
    name: string;
    types: Object[];
}

export class PokemonData {
    id: number;
    sprites: Sprites;
    name: string;
    types: string[];
    abilities: string[];
    height: number;
    moves: Move[];
    stats: Stats;
}

class Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    artwork: string;
}

export class Move {
    name: string;
    text: string;
    type: string;
    power: number;
    //pp: number;
    //accuracy: number;
}

export class Stats {
    attack: number;
    defense: number;
    hp: number;
    speed: number;
}

export class MoveList {
    pokemonId: number;
    movesId: number[];
}
