import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component';
import { LoginComponent } from './login/login.component';
import { ReceitaPreparoComponent } from './receita-preparo/receita-preparo.component';
import { SearchComponent } from './search/search.component';

// Vai ser criado um objeto constante para declarar as rotas
// esse objeto vai ser do tipo Routes e será um array. Dentro deste array que serão declaradas as rotas
// Routes é uma classe do Angular e um objeto com alguns atributos que são necessários declarar 
// path determina o caminho para um determinado componente
// Exemplo: se o path for '' (raiz), queremos que carregue um componente (no caso, o LoginComponent)
// Os componentes também devem ser importados
const APP_ROUTES: Routes = [
    { path: 'receitas', component: ReceitasListaComponent },
    { path: 'receitas/:_id', component: ReceitaPreparoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'busca', component: SearchComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];

// criação de constante do tipo ModuleWithProviders
// a constante routing vai conter a definição e configuração das rotas do projeto
// para configurar as rotas no projeto, fazemos routing receber o método RouterModule
// RouterModule está representando um módulo de rotas
// tem 2 métodos: forChild e forRoot
// forRoot é usado porque estamos configurando as rotas principais (rotas chave) da aplicação
// Vai ser passada como parametro a constante de definição das rotas (criada no bloco acima)
// export é usado porque as rotas também devem ser declaradas no módulo da aplicação
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
