import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-battle",
    templateUrl: "./battle.component.html",
    styleUrls: ["./battle.component.scss"]
})
export class BattleComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        console.log(history.state);
    }
}
