import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ClientModule } from "./client/client.module";
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from "@angular/common";
import localePl from "@angular/common/locales/pl";
import { MatIconModule } from "@angular/material";

registerLocaleData(localePl, "pl");

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClientModule,
    HttpClientModule,
    MatIconModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
