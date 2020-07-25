
module.exports.requestHooks = [require('./src/headers')];


module.exports.templateTags = [
    require('./src/geradores/email'),
    require('./src/geradores/telefone'),
    require('./src/geradores/cep') ,
    require('./src/geradores/cpf') ,
    require('./src/geradores/cnpj')
];

