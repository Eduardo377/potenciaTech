import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CursoEmAndamentoComponent } from './curso-em-andamento/curso-em-andamento.component';

@NgModule({
  declarations: [AppComponent, BodyHomeComponent, HeaderComponent, NavbarComponent, CardComponent, CursoEmAndamentoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
