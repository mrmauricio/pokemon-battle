import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PokemonService } from "./services/pokemon.service";
import { MainComponent } from "./pages/Main/main.component";
import { PokemonComponent } from "./pages/Pokemon/pokemon.component";
import { BattleComponent } from "./pages/Battle/battle.component";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        PokemonComponent,
        BattleComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [PokemonService],
    bootstrap: [AppComponent]
})
export class AppModule {}
