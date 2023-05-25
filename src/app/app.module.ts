import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormsModule } from '@angular/forms';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
