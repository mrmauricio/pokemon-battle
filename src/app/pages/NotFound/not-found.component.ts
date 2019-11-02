import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { faHome } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: "app-not-found",
    templateUrl: "./not-found.component.html",
    styleUrls: ["./not-found.component.scss"]
})
export class NotFoundComponent implements OnInit {
    faHome = faHome;

    constructor(private router: Router) {}

    ngOnInit() {}

    redirectHome() {
        this.router.navigate(["/"]);
    }
}
