import { PokemonPreview } from "./pokemon";

export class MainPageSection {
    id: number;
    title: Title;
    pokemonList: PokemonPreview[];
    isLoading: boolean;
    error: boolean;
    buttonList: ButtonList;
}

export class Title {
    name: string;
    icon: Object;
}

export class ButtonList {
    buttons: Button[];
    isLoading: boolean;
}

export class Button {
    id: number;
    name: string;
    function: (sectionId: number) => void;
    icon: Object;
}
