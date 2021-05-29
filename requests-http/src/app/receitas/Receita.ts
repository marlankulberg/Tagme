//valores e tipos dos dados que serão retirados do banco
export interface Receita {
  _id: string;
  ingredientes: [string];
  modo_preparo: [string];
  nome: string;
  descricao: string;
  tempo_preparo: string;
}