const RandomUtils = require('../utils/RandomUtils')

const CPF = {
    criar: function (mask) {
        while ((dv2 % 2) != 0) {
            var n1 = RandomUtils.getRandomInt(0, 9);
            var n2 = RandomUtils.getRandomInt(0, 9);
            var n3 = RandomUtils.getRandomInt(0, 9);
            var n4 = RandomUtils.getRandomInt(0, 9);
            var n5 = RandomUtils.getRandomInt(0, 9);
            var n6 = RandomUtils.getRandomInt(0, 9);
            var n7 = RandomUtils.getRandomInt(0, 9);
            var n8 = RandomUtils.getRandomInt(0, 9);
            var n9 = RandomUtils.getRandomInt(0, 9);

            var dv1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
            dv1 = RandomUtils.digitoVerificador(dv1);

            var dv2 = dv1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
            dv2 = RandomUtils.digitoVerificador(dv2);
        }
        return (mask) ?
            `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${dv1}${dv2}` :
            `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${dv1}${dv2}`;
    }
}

module.exports = {
    name: 'geradorDeCPF',
    displayName: 'CPF',
    description: 'Gera um CPF válido aleatório',
    args: [{
            displayName: 'Com mascara',
            description: 'Adiciona mascara',
            type: 'boolean',
            defaultValue: false
        },

    ],
    async run(context, mask) {
        return CPF.criar(mask);
    }
}