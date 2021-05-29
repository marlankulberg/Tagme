import { Injectable , EventEmitter} from '@angular/core';

import { Router } from '@angular/router';

import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // variavel boolean, para testar no método fazerLogin, se as informações são válidas
  // o valor padrão é definido como false
  usuarioAutenticado = false;

  // injeção da classe Router para permitir o redirecionamento de rota na funçào fazerLogin,
  constructor( private router: Router) { }

  // função para implentar o login pelo serviço
  // método recebe um usuario do tipo Usuário, para ajudar a validar a informação
  // se informações forem válidas, muda a variável usuarioAutencado de false (default) para true
  // e redireciona para página home. Para isso, será injetada a classe Router,
  // se informaçào for inválida, mantém a variavel como false
   // a função fazerlogin do componente irá chamar este método como serviço
  fazerLogin(usuario: Usuario) {
    if (usuario.nome === '1' && usuario.senha === '1') {
      this.usuarioAutenticado = true;

      // redireciona para rota receitas
      this.router.navigate(['/receitas']);
    } else {
      this.usuarioAutenticado = false;

    }
  }
}
