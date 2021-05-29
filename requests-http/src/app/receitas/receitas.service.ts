
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Receita } from './Receita';
import { tap, delay, take } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class ReceitasService {

    // variavel readonly, que não poderá ser atualizada
    // vai conter o endereço do servidor back-end
    private readonly API = 'http://localhost:3001/api/recipes';

    constructor(private http: HttpClient) { }

    list() {
        // usa a função get, do http e passa por parâmetro a variavel que contém 
        // o endereço e uri do servidor
        // Get vai parametrizar um tipo Receita e é um array
        // pipe é um operador do rxjs que vai enviar alguns comandos para facilitar o debug
        // o tap vai enviar um comando de console.log para que consigamos ver o que o 
        // servidor está recebendo
        return this.http.get<Receita[]>(this.API)
          .pipe(
            tap(console.log)
          );
      }

    // método para carregar um elemento, filtrando pelo id 
    //vai pegar o elemento pela rota de listagem mas filtrando o id
    //${this.API} representa a URI de receitas no servidor. depois, colocamos / e finalmente o id (${_id})
    // aqui foi usado o literal do ecmascript, para passar o valor da rota
    // vai usar o pipe(take(1)), pois só quer ir no servidor fazer a busca 1 vez
    // dessa forma, ele busca no servidor e fecha, não precisando fazer o unsubscribe
    loadByID(_id) {
        return this.http.get(`${this.API}/${_id}`).pipe(take(1));
    }

  }