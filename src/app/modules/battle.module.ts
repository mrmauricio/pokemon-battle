import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

import { BattleComponent } from "./../pages/Battle/battle.component";

@NgModule({
    declarations: [BattleComponent],
    imports: [CommonModule, AppRoutingModule],
    exports: [BattleComponent]
})
export class BattleModule {}
