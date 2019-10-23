import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { BattleModule } from "./battle.module";

import { MainComponent } from "../pages/Main/main.component";
import { PokemonComponent } from "../pages/Pokemon/pokemon.component";
import { PokemonCardComponent } from "../components/PokemonCard/pokemon-card.component";
import { ErrorComponent } from "./../components/Error/error.component";
import { LoadingComponent } from "./../components/Loading/loading.component";

@NgModule({
    declarations: [
        MainComponent,
        PokemonComponent,
        PokemonCardComponent,
        ErrorComponent,
        LoadingComponent
    ],
    imports: [CommonModule, BattleModule, AppRoutingModule, FontAwesomeModule],
    exports: [MainComponent]
})
export class MainModule {}
