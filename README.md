# tagme
App para busca e apresentação de dados

Pasta Backend, contém as informações da aplicação que retira as informações do banco (mongoDB)

A aplicação está escutando na posta 3001.

O banco de dados é restaurante e a collection é recipes

Para conseguir acessar o banco, estou acessando http://localhost:3001/api/recipes

Aplicação feita em node.js. Uso npm run dev, a partir da pasta da aplicação, para subir o serviço

A pasta Frontend contém a aplicação para visualização do conteúdo retirado do backened e as páginas HTML/CSS

Contém os componentes de login, lista de receitas, preparo de receitas e busca (em implementação)

Para acessar usa-se http://localhost:4200

Aplicação feita em Angular. Uso ng serve, a partir da pasta raiz da aplicação, para subir o serviço.

Já cai na página de login e o acesso é login: usuario@email.com e a senha é 654321.

Após o acesso, a página é direcionada para a página de receitas, onde o usuário pode acessar o restante da aplicação.

O Json que usei para acessar o banco está disponível pelo arquivo json.db
