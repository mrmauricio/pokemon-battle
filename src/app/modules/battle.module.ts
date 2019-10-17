import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BattleComponent } from "./../pages/Battle/battle.component";

@NgModule({
    declarations: [BattleComponent],
    imports: [CommonModule],
    exports: [BattleComponent]
})
export class BattleModule {}
