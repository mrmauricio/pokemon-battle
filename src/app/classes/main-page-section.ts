import { Pokemon } from "./pokemon";

export class MainPageSection {
    id: number;
    title: Title;
    pokemonList: Pokemon[];
    isLoading: boolean;
    error: boolean;
    buttonList: ButtonList;
}

class Title {
    name: string;
    icon: Object;
}

class ButtonList {
    buttons: Object[];
    isLoading: boolean;
}
