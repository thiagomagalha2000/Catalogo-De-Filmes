import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { FilmesDetalhesComponent } from './filmes-detalhes/filmes-detalhes.component';
import { CriarFilmesComponent } from './criar-filmes/criar-filmes.component';
import { DeletarFilmesComponent } from './deletar-filmes/deletar-filmes.component';
import { AtualizarFilmesComponent } from './atualizar-filmes/atualizar-filmes.component';
import { AtualizandoFilmeComponent } from './atualizando-filme/atualizando-filme.component';
import { DeletandoFilmeComponent } from './deletando-filme/deletando-filme.component';

const routes: Routes = [
  {path:'filmes', component: ListarFilmesComponent},
  {path:'detalhes/:id', component: FilmesDetalhesComponent},
  {path:'criarfilmes', component: CriarFilmesComponent},
  {path:'deletarfilmes', component: DeletarFilmesComponent},
  {path:'atualizarfilmes', component: AtualizarFilmesComponent},
  {path:'atualizandofilmes/:id', component: AtualizandoFilmeComponent},
  {path:'deletandofilmes/:id', component:DeletandoFilmeComponent},

  {path: '',
    redirectTo: '/filmes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }