import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // pegar o valor do campo
  queryField = new FormControl();

  // mostrar total de resultados
  total: number;

  // link do api utilizado para busca
  readonly SEARCH_URL = 'http://localhost:3001/api/recipes';

  // observable para verificar os resultados
  results$: Observable<any>;

  constructor( private http: HttpClient) {}

  ngOnInit() {
    
  }

  onSearch(){

    //variavel para receber o valor do campo de busca
    let value = this.queryField.value;

    // declara variavel fields para receber os parâmetros de busca
    const fields = 'nome,descricao,link';

    // se value foi digitado e se não é um valor vazio
    // já atribui valor do trim ao value para fazer a comparação
    if (value && (value = value.trim()) !== '') {

      //cria um objeto indicando quais os parâmetros se quer buscar
       const params = {
        search: value,
        fields: fields
      };

      /*let params = new HttpParams();
      params = params.set('search', value);
      params = params.set('fields', fields);*/

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => (this.total = res.total)),
          map((res: any) => res.results)
        );
    }

  }

}
