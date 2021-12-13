import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './my-models/home/home.module';
import { FuncionarioModule } from './my-models/funcionario/funcionario.module';
import { BensModule } from './my-models/bens/bens.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    FuncionarioModule,
    BensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
