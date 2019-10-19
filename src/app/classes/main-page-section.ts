import { Pokemon } from "./pokemon";

export class MainPageSection {
    id: number;
    title: string;
    titleIcon: Object;
    pokemonList: Pokemon[];
    isLoading: boolean;
    error: boolean;
    buttons: Object[];
}
