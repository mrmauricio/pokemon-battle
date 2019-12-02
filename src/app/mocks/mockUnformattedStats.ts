export const mockUnformattedStats = [
    {
        base_stat: 100,
        effort: 0,
        stat: {
            name: "speed",
            url: "https://pokeapi.co/api/v2/stat/6/"
        }
    },
    {
        base_stat: 85,
        effort: 0,
        stat: {
            name: "special-defense",
            url: "https://pokeapi.co/api/v2/stat/5/"
        }
    },
    {
        base_stat: 109,
        effort: 3,
        stat: {
            name: "special-attack",
            url: "https://pokeapi.co/api/v2/stat/4/"
        }
    },
    {
        base_stat: 78,
        effort: 0,
        stat: {
            name: "defense",
            url: "https://pokeapi.co/api/v2/stat/3/"
        }
    },
    {
        base_stat: 84,
        effort: 0,
        stat: {
            name: "attack",
            url: "https://pokeapi.co/api/v2/stat/2/"
        }
    },
    {
        base_stat: 78,
        effort: 0,
        stat: {
            name: "hp",
            url: "https://pokeapi.co/api/v2/stat/1/"
        }
    }
];

export const mockUnformattedPokemon = {
    id: 6,
    name: "charizard",
    sprites: {
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
        back_female: null,
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/6.png",
        back_shiny_female: null,
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        front_female: null,
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png",
        front_shiny_female: null
    },
    types: [
        {
            slot: 2,
            type: {
                name: "flying",
                url: "https://pokeapi.co/api/v2/type/3/"
            }
        },
        {
            slot: 1,
            type: {
                name: "fire",
                url: "https://pokeapi.co/api/v2/type/10/"
            }
        }
    ]
};
