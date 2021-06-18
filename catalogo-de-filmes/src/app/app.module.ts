import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FilmesDetalhesComponent } from './filmes-detalhes/filmes-detalhes.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule }    from '@angular/common/http';
import { CriarFilmesComponent } from './criar-filmes/criar-filmes.component';
import { DeletarFilmesComponent } from './deletar-filmes/deletar-filmes.component';
import { AtualizarFilmesComponent } from './atualizar-filmes/atualizar-filmes.component';
import { AtualizandoFilmeComponent } from './atualizando-filme/atualizando-filme.component';
import { ToastrModule } from 'ngx-toastr';
import { DeletandoFilmeComponent } from './deletando-filme/deletando-filme.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ListarFilmesComponent},
    ]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBottomSheetModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass:'toast-top-right',
    })
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ListarFilmesComponent,
    FilmesDetalhesComponent,
    CriarFilmesComponent,
    DeletarFilmesComponent,
    AtualizarFilmesComponent,
    AtualizandoFilmeComponent,
    DeletandoFilmeComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }