const RandomUtils = require('../utils/RandomUtils');

const DDI = [1, 7, 20, 27, 30, 31, 32, 33, 34, 36, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 66, 590, 591, 592, 81, 593, 82, 594, 595, 84, 596, 597, 86, 598, 599, 90, 91, 92, 93, 94, 95, 98, 670, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 212, 213, 216, 218, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 290, 291, 297, 298, 299, 833, 838, 839, 850, 852, 853, 854, 855, 856, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 880, 370, 371, 372, 373, 374, 886, 375, 376, 377, 378, 380, 381, 382, 385, 386, 387, 389, 420, 421, 423, 960, 961, 962, 963, 964, 965, 966, 967, 968, 970, 971, 972, 973, 974, 975, 976, 977, 992, 993, 994, 995, 996, 998, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509];

module.exports = {
    name: 'gerarNumeroTelefone',
    displayName: 'Telefone',
    description: 'Gera um número de telefone aleatório',
    args: [{
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
        let dddFinal = "";
        let ddiFinal = "";

        if (isDDD) {
            dddFinal = ddd && ddd > 0 ? ddd : RandomUtils.getRandomInt(11, 99);
            dddFinal = isMask ? `(${dddFinal}) ` : dddFinal;

            if (isDDI) {
                ddiFinal = ddi && ddi > 0 ? ddi : DDI[RandomUtils.getRandomInt(0, DDI.length - 1)];
                ddiFinal = isMask ? `+${ddiFinal} ` : ddiFinal;
            }
        }

        if (isMask) {
            return `${ddiFinal}${dddFinal}${RandomUtils.getRandomInt(90000, 99999)}-${RandomUtils.getRandomInt(1000, 9999)}`;
        } else {
            return `${ddiFinal}${dddFinal}${RandomUtils.getRandomInt(90000, 99999)}${RandomUtils.getRandomInt(1000, 9999)}`;
        }
    }
}