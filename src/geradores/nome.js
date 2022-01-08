const RandomUtils = require('../utils/RandomUtils');

const SOBRENOMES = [
    'Almeida', 'Alves', 'Andrade', 'Barbosa', 'Barros', 'Batista',
    'Borges', 'Campos', 'Cardoso', 'Carvalho', 'Castro', 'Costa',
    'Dias', 'Duarte', 'Freitas', 'Fernandes', 'Ferreira', 'Garcia',
    'Gomes', 'Gonçalves', 'Lima', 'Lopes', 'Machado', 'Marques',
    'Martins', 'Medeiros', 'Melo', 'Mendes', 'Miranda', 'Monteiro',
    'Moraes', 'Moreira', 'Moura', 'Nascimento', 'Nunes', 'Oliveira',
    'Pereira', 'Ramos', 'Reis', 'Ribeiro', 'Rocha', 'Santana', 'Santos',
    'Silva', 'Soares', 'Souza', 'Teixeira', 'Vieira',
];

const NOMES_COMPOSTO_FEMININO = [
    'Maria Júlia', 'Maria Luiza', 'Maria Clara', 'Maria Eduarda', 'Maria Cecília',
    'Maria Alice', 'Ana Clara', 'Ana Luiza', 'Ana Júlia', 'Ana Laura', 'Maria Helena',
    'Maria Vitória', 'Maria Fernanda', 'Ana Beatriz', 'Maria Valentina', 'Maria Flor',
    'Maria Heloísa', 'Ana Lívia', 'Ana Sophia', 'Maria Laura', 'Ana Vitória',
    'Ana Liz', 'Maria Isis', 'Maria Sophia', 'Ana Cecília',
];

const NOMES_FEMININO = [
    'Helena', 'Alice', 'Laura', 'Manuela', 'Valentina', 'Sophia', 'Isabella', 'Heloísa',
    'Luiza', 'Júlia', 'Lorena', 'Lívia', 'Cecília', 'Eloá', 'Giovanna', 'Mariana',
    'Lara', 'Beatriz', 'Antonella', 'Emanuelly', 'Isadora', 'Melissa', 'Esther', 'Lavínia',
    'Maitê', 'Sarah', 'Elisa', 'Liz', 'Yasmin', 'Isabelly', 'Alícia', 'Clara', 'Isis', 'Rebeca',
    'Rafaela', 'Marina', 'Agatha', 'Gabriela', 'Catarina', 'Letícia', 'Mirella', 'Nicole',
    'Luna', 'Olívia', 'Vitória', 'Maria', 'Allana', 'Milena', 'Emilly', 'Ayla', 'Maya',
    'Bianca', 'Clarice', 'Aurora', 'Larissa', 'Mariah', 'Pietra', 'Laís', 'Stella', 'Eduarda',
    'Carolina', 'Malu', 'Gabrielly', 'Analu', 'Amanda', 'Louise', 'Heloise', 'Fernanda',
    'Ana', 'Melina', 'Bella', 'Joana', 'Isabel', 'Melinda', 'Pérola',
];

const NOMES_COMPOSTO_MASCULINO = [
    'João Vitor', 'Julio César', 'Vitor Gabriel', 'Pedro Lucas',
    'Luiz Gustavo', 'João Paulo', 'Luiz Fernando', 'Lucas Gabriel',
    'Luiz Miguel', 'Marcos Vinicius', 'João Lucas', 'Luiz Guilherme',
    'João Miguel', 'Matheus Henrique', 'Luiz Henrique', 'João Gabriel',
    'Carlos Eduardo', 'Luiz Felipe', 'Vitor Hugo', 'João Guilherme',
    'Enzo Gabriel', 'Luiz Otávio', 'João Pedro', 'Pedro Henrique',
];

const NOMES_MASCULINO = [
    'Miguel', 'Davi', 'Gabriel', 'Arthur', 'Lucas', 'Matheus', 'Pedro', 'Guilherme', 'Gustavo',
    'Rafael', 'Felipe', 'Bernardo', 'Enzo', 'Nicolas', 'Cauã', 'Vitor', 'Eduardo', 'Daniel',
    'Henrique', 'Murilo', 'Vinicius', 'Samuel', 'Pietro', 'Leonardo', 'Caio', 'Heitor', 'Lorenzo',
    'Isaac', 'Lucca', 'Thiago', 'João', 'Theo', 'Bruno', 'Bryan', 'Breno', 'Emanuel', 'Ryan', 'Erick',
    'Yuri', 'Benjamin', 'Fernando', 'Joaquim', 'André', 'Tomás', 'Francisco', 'Rodrigo', 'Igor',
    'Antonio', 'Ian', 'Juan', 'Diogo', 'Otávio', 'Nathan', 'Calebe', 'Danilo', 'Luan', 'Kaique',
    'Alexandre', 'Iago', 'Ricardo', 'Raul', 'Marcelo', 'Cauê', 'Benício', 'Augusto', 'Giovanni',
    'Renato', 'Diego', 'Renan', 'Anthony', 'Thales', 'Henry', 'Kevin', 'Levi', 'Enrico', 'Hugo',
];

module.exports = {
    name: 'gerarNome',
    displayName: 'nome',
    description: 'Gera um nome aleatório seguido por paramentros',
    args: [
        {
            displayName: 'Masculino?',
            description: 'Adiciona um nomes feminino (default) ou masculino',
            type: 'boolean',
            defaultValue: false
        },
        //primeiroNome
        {
            displayName: 'Primeiro nome fixo',
            description: 'Mantém o nome fixo',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'Primeiro nome aleatório?',
            description: 'Adiciona um nome randômico',
            type: 'boolean',
            defaultValue: true
        },

        {
            displayName: 'Nome composto?',
            description: 'Adiciona um nome composto randômico',
            type: 'boolean',
            defaultValue: true
        },
        //sobrenome
        {
            displayName: 'Sobrenome fixo',
            description: 'Mantém o Sobrenome fixo',
            type: 'string',
            defaultValue: ''
        },
        {
            displayName: 'Sobrenome aleatório?',
            description: 'Adiciona um Sobrenome randômico',
            type: 'boolean',
            defaultValue: true
        },
        {
            displayName: 'Segundo sobrenome aleatório',
            description: 'Adiciona um Segundo sobrenome randômico',
            type: 'boolean',
            defaultValue: false
        },

    ],
    async run(context, isMasc, nomeParam, isNomeRandom, isNomeCompostoRandom, sobrenomeParam, isSobrenomeRandom, isSegundoSobrenome) {
        var nome = nomeParam
        var sobrenome = sobrenomeParam
        var sobrenome2 = ''

        if (isNomeRandom) {
            if (isNomeCompostoRandom) {
                var nomes = isMasc ? NOMES_COMPOSTO_MASCULINO : NOMES_COMPOSTO_FEMININO;
                nome = nomes[getRandomInt(0, (nomes.length - 1))];
            } else {
                var nomes = isMasc ? NOMES_MASCULINO : NOMES_FEMININO;
                nome = nomes[getRandomInt(0, (nomes.length - 1))];
            }
        }

        if (isSobrenomeRandom) {
            sobrenome = SOBRENOMES[getRandomInt(0, (SOBRENOMES.length - 1))];
        }
        if (isSegundoSobrenome) {
            sobrenome2 = ' ' + SOBRENOMES[getRandomInt(0, (SOBRENOMES.length - 1))];
        }

        return `${nome} ${sobrenome}${sobrenome2}`;
    }
}
