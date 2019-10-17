import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BattleModule } from "./battle.module";

import { MainComponent } from "../pages/Main/main.component";
import { PokemonComponent } from "../pages/Pokemon/pokemon.component";

@NgModule({
    declarations: [MainComponent, PokemonComponent],
    imports: [CommonModule, BattleModule],
    exports: [MainComponent]
})
export class MainModule {}
