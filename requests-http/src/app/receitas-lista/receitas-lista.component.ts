import { Component, OnInit, ViewChild } from '@angular/core';
import { ReceitasService } from '../receitas/receitas.service';
import { Receita } from '../receitas/Receita';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs/internal/Observable';
import { Location } from '@angular/common';

// comando preserveWhitespaces para preservar os espaços em branco na view HTML
@Component({
  selector: 'app-receitas-lista',
  templateUrl: './receitas-lista.component.html',
  styleUrls: ['./receitas-lista.component.css'],
  preserveWhitespaces: true
})
export class ReceitasListaComponent implements OnInit {

  // cria variavel receita, do tipo Receita[] criado na interface Receita.ts)
  receitas: Receita[];

  // injeção de dependencia 
  constructor(private service: ReceitasService, private router: Router, private route: ActivatedRoute, private modalService: BsModalService, private location: Location) { }


  // chamada de pedido de lista ao serviço, deve-se inscrever para escutar os envios do servidor, por
  // usa-se o subscribe
  // vai pegar o resultado e atribuir a variavel receitas
  ngOnInit() {
    this.service.list().subscribe(dados => this.receitas = dados);
  }

}
