import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importação do serviço de autenticação. Também está constando nos providers
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';

// importação de routing
import { routing } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReceitasListaComponent } from './receitas-lista/receitas-lista.component';
import { ReceitasService } from './receitas/receitas.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { LoginComponent } from './login/login.component';
import { ReceitaPreparoComponent } from './receita-preparo/receita-preparo.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitasListaComponent,
    LoginComponent,
    ReceitaPreparoComponent,
    SearchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [ReceitasService, AuthService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
