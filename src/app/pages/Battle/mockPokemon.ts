export const mockPokemon = {
    id: 12,
    sprites: {
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/12.png",
        artwork: `https://img.pokemondb.net/artwork/large/butterfree.jpg`
    },
    name: "butterfree",
    types: ["bug", "flying"],
    abilities: ["tinted-lens", "compound-eyes"],
    height: 1.1,
    moves: [
        {
            name: "air slash",
            power: 75,
            text:
                "The user attacks with a blade of air that slices even↵the sky. This may also make the target flinch.",
            type: "flying"
        },
        {
            name: "psychic",
            power: 90,
            text:
                "The target is hit by a strong telekinetic force.↵This may also lower the target’s Sp. Def stat.",
            type: "psychic"
        },
        {
            name: "bug buzz",
            power: 90,
            text:
                "The user generates a damaging sound wave by↵vibration. This may also lower the target’s↵Sp. Def stat.",
            type: "bug"
        },
        {
            name: "shadow ball",
            power: 80,
            text:
                "The user hurls a shadowy blob at the target.↵This may also lower the target’s Sp. Def stat.",
            type: "ghost"
        }
    ],
    stats: {
        attack: 90,
        defense: 80,
        hp: 320,
        speed: 70
    }
};

export const mockPokemon2 = {
    id: 18,
    sprites: {
        front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
        back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
        front_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/18.png",
        back_shiny:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/18.png",
        artwork: `https://img.pokemondb.net/artwork/large/butterfree.jpg`
    },
    name: "pidgeot",
    types: ["normal", "flying"],
    abilities: ["big-pecks", "tangled-feet", "keen-eye"],
    height: 1.5,
    moves: [
        {
            name: "air slash",
            power: 75,
            text:
                "The user attacks with a blade of air that slices even↵the sky. This may also make the target flinch.",
            type: "flying"
        },
        {
            name: "steel wing",
            power: 70,
            text:
                "The target is hit with wings of steel. This may also raise the user’s Defense stat.",
            type: "steel"
        },
        {
            name: "take down",
            power: 90,
            text:
                "A reckless, full-body charge attack for slamming into the target. This also damages the user a little.",
            type: "normal"
        },
        {
            name: "u turn",
            power: 70,
            text:
                "After making its attack, the user rushes back to switch places with a party Pokémon in waiting.",
            type: "bug"
        }
    ],
    stats: {
        attack: 80,
        defense: 75,
        hp: 366,
        speed: 101
    }
};
