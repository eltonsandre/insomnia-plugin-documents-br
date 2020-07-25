const RandomUtils = require('../utils/RandomUtils');

module.exports = {
    name: 'gerarEmail',
    displayName: 'email',
    description: 'Gera um e-mail aleatório seguido por paramentros',
    args: [
        {
            displayName: 'Prefixo username',
            description: 'Adiciona um prefixo no username',
            type: 'string',
            defaultValue: 'email.test.'
        },
        {
            displayName: 'Número random após o prefixo',
            description: 'Adiciona um número randômico apóa o prefixo no username',
            type: 'boolean',
            defaultValue: true
        },
        {
            displayName: 'Range número random início',
            description: 'Adiciona um número randômico apóa o prefixo no username',
            type: 'number',
            defaultValue: 1
        },
        {
            displayName: 'Range número random fim',
            description: 'Adiciona um número randômico após o prefixo no username',
            type: 'number',
            defaultValue: 9999
        },
        {
            displayName: 'Sufixo username',
            description: 'Adiciona um sufixo no username',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'Domínio do e-mail',
            description: 'Adiciona um domínio do e-mail',
            type: 'string',
            defaultValue: 'mock.com.br'
        },

    ],
    async run(context, prefixo, random, de, ate, sufixo, dominio) {
        return `${prefixo}${random ? RandomUtils.getRandomInt(de, ate) : ""}${sufixo}@${dominio}`;
    }
}