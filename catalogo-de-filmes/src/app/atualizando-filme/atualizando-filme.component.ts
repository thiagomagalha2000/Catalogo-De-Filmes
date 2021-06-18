import { Component, OnInit } from '@angular/core';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { trocandoJson } from '../trocandoJSON';
import { Router, ActivatedRoute } from '@angular/router';
import { Filme } from '../filmes';
import { FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-atualizando-filme',
  templateUrl: './atualizando-filme.component.html',
  styleUrls: ['./atualizando-filme.component.css']
})

export class AtualizandoFilmeComponent implements OnInit {

  filme: Filme;
  idDoFilme: number = 0;
  formularioDeFilme;
  arrayDeGeneros: Array<any> = [];
  listaDeGenerosQueNaoSaoDoFilme:Array<any> = [];
  listaFinalDosGeneros: Array<any> = [];

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private formBuilder: FormBuilder,
    private filmeNovo: trocandoJson, private filmeAtualizado: trocandoJson, private toastr: ToastrService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getFilme(this.route.snapshot.params['id']);
    this.formularioDeFilme = this.criandoFormulario();
  }

  getFilme(id: number){
    this.idDoFilme = id;
    this.filmeServiceSetadoDoJava.buscarDetalheDoFilmeJava(id).subscribe((data: Filme) => {

      this.filmeServiceSetadoDoJava.buscarListaDosGeneros().subscribe((data: any[]) => {
        this.arrayDeGeneros = data;
        this.formularioDeFilme.addControl('categorias_do_filme',this.addCategoriasForm());
      });
  
      this.filme = this.filmeNovo.mudarArquivoJsonDoBackParaOFront(data);
      this.listaFinalDosGeneros=this.filme.genres;

      this.formularioDeFilme.setValue({
        nome_do_filme:this.filme.title,
        sinopse_do_filme: this.filme.overview,
        lancamento_do_filme: this.filme.release_date,
        duracao_do_filme: this.filme.runtime,
        imagem_do_filme: this.filme.backdrop_path,
      });
    });
  }

  criandoFormulario(){
    return this.formBuilder.group({
      nome_do_filme: [''],
      sinopse_do_filme: [''],
      lancamento_do_filme: [''],
      duracao_do_filme: [''],
      imagem_do_filme: [''],
    });
  }

  addCategoriasForm(){
    const arr = this.listaInicialDosGenerosQueNaoSaoDoFilme().map(() =>{
      return this.formBuilder.control(false);
    });
    const arr2 = this.filme.genres.map(() =>{
      return this.formBuilder.control(true);
    });
    this.arrayDeGeneros = this.listaInicialDosGenerosQueNaoSaoDoFilme().concat(this.filme.genres);
    var arrayFinal = arr.concat(arr2);
    return this.formBuilder.array(arrayFinal);
  }

  listaInicialDosGenerosQueNaoSaoDoFilme(){
    this.listaDeGenerosQueNaoSaoDoFilme=[];
    for(var i=0; i<this.arrayDeGeneros.length; i++){
      if(this.filme.genres.some(x => x.id === this.arrayDeGeneros[i].id)){
        continue;
      }
      this.listaDeGenerosQueNaoSaoDoFilme.push(this.arrayDeGeneros[i]);
    }
    return this.listaDeGenerosQueNaoSaoDoFilme;
  }

  get categoriasForm(): FormArray{
    return this.formularioDeFilme.get("categorias_do_filme") as FormArray;
  }

  getGenerosSelecionados(){
    this.listaFinalDosGeneros=[];
    this.categoriasForm.controls.forEach((control, i)=>{
      if(control.value){
        this.listaFinalDosGeneros.push(this.arrayDeGeneros[i]);
      }
    })
  }

  generosSelecionados(){
    return this.formBuilder.array(this.listaFinalDosGeneros);
  }

  getIdDoFilme(){
    return this.formBuilder.control(this.idDoFilme);
  }

  onSubmit() {
    if((this.listaFinalDosGeneros.length>0 ? true : false)==true){
      this.formularioDeFilme.addControl('categorias_do_filme_selecionados',this.generosSelecionados());
      this.formularioDeFilme.addControl('id_do_filme',this.getIdDoFilme());
      var jsonString = Array(this.formularioDeFilme.value).map(({categorias_do_filme, ...demais }) => demais);
      this.filmeServiceSetadoDoJava.atualizarFilme(this.filmeAtualizado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
      this.irParaPaginaAtualizarFilmes();
      this.toastr.success("O filme foi atualizado com sucesso!");
      setTimeout(function() {
        window.location.reload();
      });
    }else{
      alert("Escolha pelo menos um genero");
    }
  }

  irParaPaginaAtualizarFilmes(){
    this.router.navigate(['/atualizarfilmes'], { relativeTo: this.route });
  }
}