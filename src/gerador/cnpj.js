const RandomUtils = require('../utils/RandomUtils');

const CNPJ = {
    criar: (mask) => {
        while ((dv2 % 2) != 0) {
            var n1 = RandomUtils.getRandomInt(0, 9);
            var n2 = RandomUtils.getRandomInt(0, 9);
            var n3 = RandomUtils.getRandomInt(0, 9);
            var n4 = RandomUtils.getRandomInt(0, 9);
            var n5 = RandomUtils.getRandomInt(0, 9);
            var n6 = RandomUtils.getRandomInt(0, 9);
            var n7 = RandomUtils.getRandomInt(0, 9);
            var n8 = RandomUtils.getRandomInt(0, 9);
            var n9 = 0;
            var n10 = 0;
            var n11 = 0;
            var n12 = 1;

            var dv1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
            dv1 = RandomUtils.digitoVerificador(dv1);

            var dv2 = dv1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
            dv2 = RandomUtils.digitoVerificador(dv2);
        }
        return (mask) ?
            `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${dv1}${dv2}` :
            `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${dv1}${dv2}`;
    }

}

module.exports = {
    name: 'geradorDeCNPJ',
    displayName: 'CNPJ',
    description: 'Gera um CNPJ válido aleatório',
    args: [{
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