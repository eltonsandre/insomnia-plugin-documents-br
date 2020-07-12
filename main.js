
module.exports.requestHooks = [require('./src/headers')];


module.exports.templateTags = [
    require('./src/gerador/nome'),
    require('./src/gerador/email'),
    require('./src/gerador/telefone'),
    require('./src/gerador/cep') ,
    require('./src/gerador/cpf') ,
    require('./src/gerador/cnpj')
];

