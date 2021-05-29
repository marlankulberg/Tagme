import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceitasService } from '../receitas/receitas.service';
import { Receita } from '../receitas/Receita';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { Location } from '@angular/common';

// comando preserveWhitespaces para preservar os espaços em branco na view HTML
@Component({
  selector: 'app-receita-preparo',
  templateUrl: './receita-preparo.component.html',
  styleUrls: ['./receita-preparo.component.css'],
  preserveWhitespaces: true
})
export class ReceitaPreparoComponent implements OnInit {

  // cria variavel cursos, do tipo Receita[] (criado na interface Receita.ts)
  receitas: Receita[];

   //Variavel do tipo receita, usada para ser a referencia dos elementos de receita 
  receitaSelecionada: any;

  // injeção de dependencia 
  constructor(private service: ReceitasService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService, private location: Location) { }

  // chamada de pedido de lista ao serviço, deve-se inscrever para escutar os envios do servidor, por
  // usa-se o subscribe
  // vai pegar o resultado e atribuir a variavel receitaSelecionada
  ngOnInit() {

        //verifica a rota para buscar o item _id, para buscar apenas 1 prato
        this.route.params.subscribe(
       (params: any) => {
        const id = params['_id'];
        console.log(id); 
    
          if (id) {
            this.service
              // carrega os dados de 1 prato por id setando o valor do servidor para receitaSelecionada
              .loadByID(id)
              .subscribe(dados => {
                this.receitaSelecionada = dados;
                console.log(dados); 
              },
              erro => console.log(erro));
          }
        });
  }

}

