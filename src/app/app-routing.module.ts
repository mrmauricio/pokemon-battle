import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./pages/Main/main.component";
import { PokemonComponent } from "./pages/Pokemon/pokemon.component";
import { BattleComponent } from "./pages/Battle/battle.component";
import { NotFoundComponent } from "./pages/NotFound/not-found.component";

const routes: Routes = [
    {
        path: "",
        component: MainComponent
    },
    {
        path: "pokemon/:id",
        component: PokemonComponent
    },
    {
        path: "battle",
        component: BattleComponent
    },
    {
        path: "404",
        component: NotFoundComponent
    },
    {
        path: "**",
        redirectTo: "/404"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
