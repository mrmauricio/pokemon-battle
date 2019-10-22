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
    stats: Stat[];
}

class Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
}

class Move {
    name: string;
    text: string;
    type: string;
    power: number;
    //pp: number;
    //accuracy: number;
}

export class Stat {
    name: string;
    power: number;
}

export class MoveList {
    pokemonId: number;
    movesIdList: number[];
}
