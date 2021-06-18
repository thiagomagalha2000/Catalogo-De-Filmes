import { Component, OnInit } from '@angular/core';
import { Filme } from '../filmes';
import { FilmeServiceSetadoDoJava } from '../filme.serviceSetadoDoJava';
import { ToastrService } from 'ngx-toastr';
import { trocandoJson } from '../trocandoJSON';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deletando-filme',
  templateUrl: './deletando-filme.component.html',
  styleUrls: ['./deletando-filme.component.css']
})

export class DeletandoFilmeComponent implements OnInit {

  filme:Filme;

  constructor(private filmeServiceSetadoDoJava: FilmeServiceSetadoDoJava, private filmeNovo: trocandoJson,
    private toastr: ToastrService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.getFilme(this.route.snapshot.params['id']);
  }

  getFilme(id: number){
    this.filmeServiceSetadoDoJava.buscarDetalheDoFilmeJava(id).subscribe((data: Filme) => {
      this.filme = this.filmeNovo.mudarArquivoJsonDoBackParaOFront(data);
    });
  }

  deletarUmFilme(id:number){
    this.filmeServiceSetadoDoJava.deletarFilme(id).subscribe(()=>{});
    this.irParaPaginaDeletarFilmes();
    this.toastr.warning("O filme foi deletado com sucesso!");
    setTimeout(function() {
      window.location.reload();
    });
  }

  irParaPaginaDeletarFilmes(){
    this.router.navigate(['/deletarfilmes'], { relativeTo: this.route });
  }
}