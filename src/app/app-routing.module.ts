import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  { path: '', component:  UsuarioComponent},
  { path: 'produto', component:  ProdutoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
