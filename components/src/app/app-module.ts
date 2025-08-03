import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './card/card';
import { CardAzul } from './card-azul/card-azul';
import { CardButton } from './card-button/card-button';
import { CardAzulButton } from './card-azul-button/card-azul-button';


@NgModule({
  declarations: [
    App,
    Card,
    CardAzul,
    CardButton,
    CardAzulButton,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
