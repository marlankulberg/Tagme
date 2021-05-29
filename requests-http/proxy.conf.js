//Cria a const PROXY_CONFIG que é um array e que contém um objeto com algumas especificações
//Essas especificações servem para o Angular poder se comunicar com uma API Back-end
// context é um array e pode conter mais de uma opção. Aqui terá apenas /api, que é a convenção mais utilizada
//porque costuma ser a URI que separa o que é rota do que é URL (endereço da página)
// O target é o endereço do Back-end (sem URIs)
// secure tem a ver com configuração de segurança. Se usar HTTPS, colocar TRUE, se não pode colocar FALSE
// LogLevel é o nível de Log, pode ser DEBUG, INFO, ERROR, ou outros. Padrão é DEBUG
// podem existir casos de APIs backend que não usam a convenção de /api (como as mais antigas)
// para isso usa a especificação pathRewrite (vai reescrever o caminho)
// pathRewrite é um objeto e nele indicamos qual o caminho
// '^/api': '' : ^ significa negação de /API e depois indica por '' onde será reescrito o caminho
// ou seja vai retirar o barra api deixando apenas o primeiro endpoint do backend
// pelo padrão iamos buscar /api/upload
// Usando pathRewrite vai buscar apenas /upload
const PROXY_CONFIG = [{
    context: ['/api'],
    target: 'http://localhost:3001/',
    secure: false,
    logLevel: 'debug',
    pathRewrite: { '^/api': '' }
}];

module.exports = PROXY_CONFIG;