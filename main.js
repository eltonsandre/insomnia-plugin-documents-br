

const DDI = [1, 7, 20, 27, 30, 31, 32, 33, 34, 36, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 590, 591, 592, 81, 593, 82, 594, 595, 84, 596, 597, 86, 598, 599, 90, 91, 92, 93, 94, 95, 98, 670, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 212, 213, 216, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 290, 291, 297, 298, 299, 833, 838, 839, 850, 852, 853, 854, 855, 856, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 880, 370, 371, 372, 373, 374, 886, 375, 376, 377, 378, 380, 381, 382, 385, 386, 387, 389, 420, 421, 423, 960, 961, 962, 963, 964, 965, 966, 967, 968, 970, 971, 972, 973, 974, 975, 976, 977, 992, 993, 994, 995, 996, 998, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509];

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
            `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${dv1}${dv2}`
            : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${dv1}${dv2}`;
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
            `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${dv1}${dv2}`
            : `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${dv1}${dv2}`;
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
                displayName: 'com DDI',
                description: 'Não adiciona DDI',
                type: 'boolean',
                defaultValue: true
            },
            {
                displayName: 'Fixar o DDI ou 0 para randômico (DDI válidos no mundo)',
                description: 'Adiciona DDI',
                type: 'number'
            },
            {
                displayName: 'com DDD',
                description: 'Não adiciona DDD',
                type: 'boolean',
                defaultValue: true
            },
            {
                displayName: 'Fixar o DDD ou 0 para randômico (11 a 99)',
                description: 'Adiciona DDD',
                type: 'number'
            }
        ],
        async run(context, isMask, isDDI, ddi, isDDD, ddd) {
            let dddFinal="";
            let ddiFinal="";

            if (isDDD) {
                dddFinal = ddd && ddd > 0 ? ddd : getRandomInt(11, 99);
                dddFinal = isMask ? `(${dddFinal}) `: dddFinal;

                if (isDDI) {
                    ddiFinal=ddi && ddi > 0 ? ddi : DDI[getRandomInt(0, DDI.length-1)];
                    ddiFinal = isMask ? `+${ddiFinal} `: ddiFinal;
                }
            }

            if (isMask) {
                return `${ddiFinal}${dddFinal}${getRandomInt(90000, 99999)} - ${getRandomInt(1000, 9999)}`;
            } else {
                return `${ddiFinal}${dddFinal}${getRandomInt(90000, 99999)}${getRandomInt(1000, 9999)}`;
            }
        }
    },
    {
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
            return `${prefixo}${random ? getRandomInt(de, ate) : ""}${sufixo}@${dominio}`;
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

