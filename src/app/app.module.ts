import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { MainModule } from "./modules/main.module";
import { AppRoutingModule } from "./modules/app-routing.module";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./pages/NotFound/not-found.component";
import { HeaderComponent } from "./components/Header/header.component";
import { FooterComponent } from "./components/Footer/footer.component";

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MainModule,
        FontAwesomeModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
