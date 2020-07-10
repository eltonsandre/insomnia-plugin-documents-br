

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const digitoVerificador = (dv) => {
    dv = 11 - (dv % 11);
    return (dv >= 10) ? 0 : dv;
}


const CPF = {
    criar: function (mask) {
        while ((dv2 % 2) != 0) {
            var n1 = getRandomInt(0, 9);
            var n2 = getRandomInt(0, 9);
            var n3 = getRandomInt(0, 9);
            var n4 = getRandomInt(0, 9);
            var n5 = getRandomInt(0, 9);
            var n6 = getRandomInt(0, 9);
            var n7 = getRandomInt(0, 9);
            var n8 = getRandomInt(0, 9);
            var n9 = getRandomInt(0, 9);

            var dv1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
            dv1 = digitoVerificador(dv1);

            var dv2 = dv1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
            dv2 = digitoVerificador(dv2);
        }
        return (mask) ?
            '' + n1 + n2 + n3 + '.' + n4 + n5 + n6 + '.' + n7 + n8 + n9 + '-' + dv1 + dv2
            : '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + dv1 + dv2 + '';
    }
}

const CNPJ = {
    criar: (mask) => {
        while ((dv2 % 2) != 0) {
            var n1 = getRandomInt(0, 9);
            var n2 = getRandomInt(0, 9);
            var n3 = getRandomInt(0, 9);
            var n4 = getRandomInt(0, 9);
            var n5 = getRandomInt(0, 9);
            var n6 = getRandomInt(0, 9);
            var n7 = getRandomInt(0, 9);
            var n8 = getRandomInt(0, 9);
            var n9 = 0;
            var n10 = 0;
            var n11 = 0;
            var n12 = 1;

            var dv1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
            dv1 = digitoVerificador(dv1);

            var dv2 = dv1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
            dv2 = digitoVerificador(dv2);
        }
        return (mask) ?
            '' + n1 + n2 + '.' + n3 + n4 + n5 + '.' + n6 + n7 + n8 + '/' + n9 + n10 + n11 + n12 + '-' + dv1 + dv2
            : '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 + n11 + n12 + dv1 + dv2 + '';
    }

}


module.exports.templateTags = [
    {
        name: 'gerarNumeroTelefone',
        displayName: 'Telefone',
        description: 'Gera um número de telefone aleatório',
        args: [
            {
                displayName: 'Com mascara',
                description: 'Adiciona mascara',
                type: 'boolean',
                defaultValue: false
            },
            {
                displayName: 'Com DDI',
                description: 'Adiciona DDI',
                type: 'string',
                defaultValue: ''
            }
        ],
        async run(context, mask, ddi) {
            if (mask) {
                return ddi + '(' + getRandomInt(11, 19) + ') ' + getRandomInt(99000, 99999) + '-' + getRandomInt(1000, 9999);
            } else {
                return ddi + getRandomInt(11, 19) + "" + getRandomInt(99000, 99999) + "" + getRandomInt(1000, 9999);
            }
        }
    },
    {
        name: 'email',
        displayName: 'E-mail',
        description: 'Gera um e-mail aleatório',
        args: [
            {
                displayName: 'prefixo',
                description: 'Adiciona um prefixo',
                type: 'string',
                defaultValue: 'test'
            },
            {
                displayName: 'dominio',
                description: 'Adiciona um dominio',
                type: 'string',
                defaultValue: 'mock.com.br'
            },

        ],
        async run(context, prefixo, dominio) {
            return prefixo + '' + getRandomInt(1, 9999) + '@' + dominio;
        }
    },
    {
        name: 'geradorDeCPF',
        displayName: 'CPF',
        description: 'Gera um CPF válido aleatório',
        args: [
            {
                displayName: 'Com mascara',
                description: 'Adiciona mascara',
                type: 'boolean',
                defaultValue: false
            },

        ],
        async run(context, mask) {
            return CPF.criar(mask);
        }
    },
    {
        name: 'geradorDeCNPJ',
        displayName: 'CNPJ',
        description: 'Gera um CNPJ válido aleatório',
        args: [
            {
                displayName: 'Com mascara',
                description: 'Adiciona mascara',
                type: 'boolean',
                defaultValue: false
            },

        ],
        async run(context, mask) {
            return CNPJ.criar(mask);
        }
    }

];

