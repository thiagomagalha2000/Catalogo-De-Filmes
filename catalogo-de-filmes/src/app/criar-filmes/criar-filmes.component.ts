import { Component, OnInit } from '@angular/core';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { FormBuilder, FormArray } from '@angular/forms';
import { trocandoJson } from '../trocandoJSON';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-criar-filmes',
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css']
})

export class CriarFilmesComponent implements OnInit {

  listaFinalDosGeneros = [];
  arrayDeGeneros: Array<any>;
  formularioDeFilme = this.criandoFormulario();

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private formBuilder: FormBuilder,
    private filmeCadastrado: trocandoJson, private toastr: ToastrService, private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(){
    this.filmeServiceSetadoDoJava.buscarListaDosGeneros().subscribe((data: any[]) => {
      this.arrayDeGeneros = data;
      this.formularioDeFilme.addControl('categorias_do_filme',this.addCategoriasForm());
    })
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
    const arr = this.arrayDeGeneros.map(() =>{
      return this.formBuilder.control(false);
    });
    return this.formBuilder.array(arr);
  }

  get categoriasForm(): FormArray{
    return this.formularioDeFilme.get("categorias_do_filme") as FormArray;
  }

  getGenerosSelecionados(){
    this.listaFinalDosGeneros = [];
    this.categoriasForm.controls.forEach((control, i)=>{
      if(control.value){
        this.listaFinalDosGeneros.push(this.arrayDeGeneros[i]);
      }
    })
  }

  generosSelecionados(){
    return this.formBuilder.array(this.listaFinalDosGeneros);
  }

  onSubmit() {
    if((this.listaFinalDosGeneros.length>0 ? true : false)==true){
      this.formularioDeFilme.addControl('categorias_do_filme_selecionados',this.generosSelecionados());
      var jsonString = Array(this.formularioDeFilme.value).map(({categorias_do_filme, ...demais }) => demais);
      this.filmeServiceSetadoDoJava.salvarFilme(this.filmeCadastrado.mudarArquivoJsonDoFrontParaOBack(jsonString)).subscribe(()=>{});
      this.irParaPaginaListarFilmes();
      this.toastr.success('O filme foi cadastrado com sucesso!');
      setTimeout(function() {
        window.location.reload();
      });
    }else{
      alert("Escolha pelo menos um genero");
    }
  }

  irParaPaginaListarFilmes(){
    this.router.navigate(['/filmes'], { relativeTo: this.route });
  }
}