import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { MainModule } from "./modules/main.module";
import { AppRoutingModule } from "./modules/app-routing.module";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./pages/NotFound/not-found.component";
import { HeaderComponent } from "./components/Header/header.component";
import { FooterComponent } from "./components/Footer/footer.component";

import { PokemonService } from "./services/pokemon.service";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, MainModule],
    providers: [PokemonService],
    bootstrap: [AppComponent]
})
export class AppModule {}
