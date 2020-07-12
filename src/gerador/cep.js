const RandomUtils = require('../utils/RandomUtils');

const CEP_SUFIXO_RURAL = '899';

const CEP_ESTADO = {
    ac: [
        [69900, 69999]
    ],
    al: [
        [57000, 57999]
    ],
    am: [
        [69000, 69299],
        [69400, 69899]
    ],
    ap: [
        [68900, 68999]
    ],
    ba: [
        [40000, 48999]
    ],
    ce: [
        [60000, 63999]
    ],
    df: [
        [70000, 72799],
        [73000, 73699]
    ],
    es: [
        [29000, 29999]
    ],
    go: [
        [72800, 72999],
        [73700, 76799]
    ],
    ma: [
        [65000, 65999]
    ],
    mg: [
        [30000, 39999]
    ],
    ms: [
        [79000, 79999]
    ],
    mt: [
        [78000, 78899]
    ],
    pa: [
        [66000, 68899]
    ],
    pb: [
        [58000, 58999]
    ],
    pe: [
        [50000, 56999]
    ],
    pi: [
        [64000, 64999]
    ],
    pr: [
        [80000, 87999]
    ],
    rj: [
        [20000, 28999]
    ],
    rn: [
        [59000, 59999]
    ],
    ro: [
        [76800, 76999]
    ],
    rr: [
        [69300, 69399]
    ],
    rs: [
        [90000, 99999]
    ],
    sc: [
        [88000, 89999]
    ],
    se: [
        [49000, 49999]
    ],
    sp: [
        [1000, 19999]
    ],
    to: [
        [77000, 77999]
    ]
};

module.exports = {
    name: 'geradorDeCEP',
    displayName: 'CEP',
    description: 'Gera um CEP válido aleatório',
    args: [{
            displayName: 'Com mascara',
            description: 'Adiciona mascara',
            type: 'boolean',
            defaultValue: false
        },
        {
            displayName: 'Estado',
            description: 'Adiciona CEP do estado',
            type: 'enum',
            defaultValue: "sp",
            options: [{
                    ID: "1",
                    value: "ac",
                    displayName: "AC",
                    description: "Acre"
                },
                {
                    ID: "2",
                    value: "al",
                    displayName: "AL",
                    description: "Alagoas"
                },
                {
                    ID: "3",
                    value: "am",
                    displayName: "AM",
                    description: "Amazonas"
                },
                {
                    ID: "4",
                    value: "ap",
                    displayName: "AP",
                    description: "Amapá"
                },
                {
                    ID: "5",
                    value: "ba",
                    displayName: "BA",
                    description: "Bahia"
                },
                {
                    ID: "6",
                    value: "ce",
                    displayName: "CE",
                    description: "Ceará"
                },
                {
                    ID: "7",
                    value: "df",
                    displayName: "DF",
                    description: "Distrito Federal"
                },
                {
                    ID: "8",
                    value: "es",
                    displayName: "ES",
                    description: "Espírito Santo"
                },
                {
                    ID: "9",
                    value: "go",
                    displayName: "GO",
                    description: "Goiás"
                },
                {
                    ID: "10",
                    value: "ma",
                    displayName: "MA",
                    description: "Maranhão"
                },
                {
                    ID: "11",
                    value: "mg",
                    displayName: "MG",
                    description: "Minas Gerais"
                },
                {
                    ID: "12",
                    value: "ms",
                    displayName: "MS",
                    description: "Mato Grosso do Sul"
                },
                {
                    ID: "13",
                    value: "mt",
                    displayName: "MT",
                    description: "Mato Grosso"
                },
                {
                    ID: "14",
                    value: "pa",
                    displayName: "PA",
                    description: "Pará"
                },
                {
                    ID: "15",
                    value: "pb",
                    displayName: "PB",
                    description: "Paraíba"
                },
                {
                    ID: "16",
                    value: "pe",
                    displayName: "PE",
                    description: "Pernambuco"
                },
                {
                    ID: "17",
                    value: "pi",
                    displayName: "PI",
                    description: "Piauí"
                },
                {
                    ID: "18",
                    value: "pr",
                    displayName: "PR",
                    description: "Paraná"
                },
                {
                    ID: "19",
                    value: "rj",
                    displayName: "RJ",
                    description: "Rio de Janeiro"
                },
                {
                    ID: "20",
                    value: "rn",
                    displayName: "RN",
                    description: "Rio Grande do Norte"
                },
                {
                    ID: "21",
                    value: "ro",
                    displayName: "RO",
                    description: "Rondônia"
                },
                {
                    ID: "22",
                    value: "rr",
                    displayName: "RR",
                    description: "Roraima"
                },
                {
                    ID: "23",
                    value: "rs",
                    displayName: "RS",
                    description: "Rio Grande do Sul"
                },
                {
                    ID: "24",
                    value: "sc",
                    displayName: "SC",
                    description: "Santa Catarina"
                },
                {
                    ID: "25",
                    value: "se",
                    displayName: "SE",
                    description: "Sergipe"
                },
                {
                    ID: "26",
                    value: "sp",
                    displayName: "SP",
                    description: "São Paulo"
                },
                {
                    ID: "27",
                    value: "to",
                    displayName: "TO",
                    description: "Tocantins"
                }
            ]
        },
        {
            displayName: 'distrito-sede',
            description: 'Adiciona CEP de distrito-sede',
            type: 'boolean',
            defaultValue: false
        },
        {
            displayName: 'Área Rural',
            description: 'Adiciona CEP de área Rural',
            type: 'boolean',
            defaultValue: false
        }

    ],
    async run(context, mask, uf, isSede, isRural) {
        console.log(context)

        let index = RandomUtils.getRandomInt(0, CEP_ESTADO[uf].length - 1);
        let cepPrefix = '' + RandomUtils.getRandomInt(CEP_ESTADO[uf][index][0], CEP_ESTADO[uf][index][1]);

        cepPrefix = `${cepPrefix.length == 4 ? '0' : ''}${cepPrefix}${mask ? '-': ''}`

        if (isRural) {
            return `${cepPrefix}${CEP_SUFIXO_RURAL}`;
        }

        if (isSede) {
            return `${cepPrefix}000`;
        }

        let sufixo = '' + RandomUtils.getRandomInt(0, 999);
        sufixo = sufixo.padStart(3, '0');

        return `${cepPrefix}${sufixo}`;

    }
}