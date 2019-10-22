import { PokemonPreview, PokemonData } from "./pokemon";

export class MainPageSection {
    id: number;
    title: Title;
    pokemonList: (PokemonPreview | PokemonData)[];
    isLoading: boolean;
    error: boolean;
    buttonList: ButtonList;
}

class Title {
    name: string;
    icon: Object;
}

class ButtonList {
    buttons: Button[];
    isLoading: boolean;
}

export class Button {
    id: number;
    name: string;
    function: (sectionId: number) => void;
    icon: Object;
}
