import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSelectComponent } from './components/account-select/account-select.component';
import { AccountTypeSelectComponent } from './components/account-type-select/account-type-select.component';
import { AccountConfirmComponent } from './components/account-confirm/account-confirm.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountSelectComponent,
    AccountTypeSelectComponent,
    AccountConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
