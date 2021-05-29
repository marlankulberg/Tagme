import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component';

// Vai buscar as rotas a partir do arquivo app.routing.ts, que está exportando de lá
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
