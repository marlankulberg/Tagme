import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // usuario para receber as informações dos inputs de usuario e senha, que vem do template
  // Objeto usuário é instanciado da classe
  usuario: Usuario = new Usuario();

  // injeção de dependencia de AuthService para gerar a lógica de fazerLogin()
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  // função para acionar o botão de login que está no template
  // método recebe um usuario do tipo Usuário, para ajudar a validar a informação
  // se informações forem válidas, muda a variável usuarioAutencado de false (default) para true
  // e redireciona para página receitas. Para isso, será injetada a classe Router, em AuthService
  // se informaçào for inválida, mantém a variavel como false
  // método vai fazer a chamada do do fazerLogin do serviço, passando o objeto usuario
  fazerLogin(){
      this.authService.fazerLogin(this.usuario);
  }

}