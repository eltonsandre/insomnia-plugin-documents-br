const RandomUtils = require('../utils/RandomUtils');
const moment = require('moment');

const dataValue = 'data-random'
const dataHoraValue = 'data-time-random'
const dataSomarValue = 'data-somar'

function getDate(days, months, years, hora, minuto, format) {
    let dataMoment = moment();

    dataMoment.day(days);
    dataMoment.month(months - 1);
    dataMoment.year(years);
    dataMoment.hour(hora);
    dataMoment.minute(minuto);

    return dataMoment.format(format);
}

function somaEmData(days, months, years, format) {
    let dataMoment = moment();

    dataMoment.add(days, 'days');
    dataMoment.add(months, 'months');
    dataMoment.add(years, 'years');

    return dataMoment.format(format);
}

module.exports = {
    name: 'gerarDatas',
    displayName: 'Data',
    description: 'Gera data formatada de acordo com os parametros.',

    args: [
        {
            displayName: 'Function',
            type: 'enum',
            options: [
                { displayName: 'Somar/subtrair a data', value: dataSomarValue },
                { displayName: 'data aleatório', value: dataValue },
                { displayName: 'data e hora aleatório', value: dataHoraValue },
            ],
        },

        {
            displayName: 'Dia - inicial',
            description: 'Dia random inicial',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 1
        },
        {
            displayName: 'Dia - final',
            description: 'Mês random final',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 31
        },
        {
            displayName: 'Mês - inicial',
            description: 'Mês random inicial',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 1
        },
        {
            displayName: 'Mês - final',
            description: 'Mês random final',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 12
        },
        {
            displayName: 'Ano - inicial',
            description: 'Ano random inicial',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 1985
        },
        {
            displayName: 'Ano - final',
            description: 'Ano random final',
            hide: args => args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 2023
        },
        //Random hora
        {
            displayName: 'Hora - inicial',
            description: 'Hora random inicial',
            hide: args => args[0].value === dataValue || args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Hora - final',
            description: 'Hora random final',
            hide: args => args[0].value === dataValue || args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 23
        },
        {
            displayName: 'Minuto - inicial',
            description: 'Minuto random inicial',
            hide: args => args[0].value === dataValue || args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Minuto - final',
            description: 'Minuto random final',
            hide: args => args[0].value === dataValue || args[0].value === dataSomarValue,
            type: 'number',
            defaultValue: 59
        },
        //somar em data
        {
            displayName: 'Dias',
            description: 'Dias a ser somado à data.',
            hide: args => args[0].value !== dataSomarValue,
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Meses',
            description: 'Dias a ser somado à data.',
            hide: args => args[0].value !== dataSomarValue,
            type: 'number',
            defaultValue: 0
        },
        {
            displayName: 'Anos',
            description: 'Anos a ser somado à data.',
            hide: args => args[0].value !== dataSomarValue,
            type: 'number',
            defaultValue: 0
        },

        {
            displayName: 'Pattern para formatar',
            description: 'Formato de saída da data. Ex. YYYY-MM-DDTHH:mm:ssZ',
            type: 'string',
            defaultValue: "DD/MM/YYYY HH:mm"
        }
    ],

    async run(context, fnName, diaIni, diaFim, mesIni, mesFim, anoIni, anoFim,
        horaIni, horaFim, minutoIni, minutoFim,
        days, months, years, format) {

        if (fnName === dataSomarValue) {
            return somaEmData(days, months, years, format);
        }

        var errorMenor1 = [diaIni, diaFim, mesIni, mesFim, anoIni, anoFim, format]
            .find(it => it < 1)

        var errorMenor0 = [horaIni, horaFim, minutoIni, minutoFim]
            .find(it => it < 0)

        console.log('errorMenor0', errorMenor0)
        console.log('errorMenor1', errorMenor1)

        if (errorMenor0 < 0) {
            throw new Error("Nenhum valor de hora pode ser menor que zero")
        }

        if (errorMenor1 < 1) {
            throw new Error("Nenhum valor da data pode ser menor que 1")
        }
        //dia
        if (diaIni > 31 || diaFim > 31) {
            throw new Error("Dia deve ser máximo 31.")
        }
        if (diaIni > diaFim) {
            throw new Error("Dia final deve ser maior/igual que o inicial.")
        }

        //mes
        if (mesIni > 12 || mesFim > 12) {
            throw new Error("Mês deve ser máximo 12.")
        }
        if (mesIni > mesFim) {
            throw new Error("Mês final deve ser maior/igual que o inicial.")
        }

        if (anoIni > anoFim) {
            throw new Error("Ano final deve ser maior/igual que o inicial.")
        }

        let hora;
        let minuto;
        if (fnName === dataHoraValue) {
            //hora
            if (horaIni > 23 || horaFim > 23) {
                throw new Error("Hora deve ser máximo 23.")
            }
            if (horaIni > horaFim) {
                throw new Error("Hora final deve ser maior/igual que o inicial.")
            }
            //minuto
            if (minutoIni > 59 || minutoFim > 59) {
                throw new Error("Minuto deve ser máximo 59.")
            }
            if (minutoIni > minutoFim) {
                throw new Error("Minuto final deve ser maior/igual que o inicial.")
            }
            hora = RandomUtils.getRandomInt(horaIni, horaFim)
            minuto = RandomUtils.getRandomInt(minutoIni, minutoFim)
        } else {
            hora = RandomUtils.getRandomInt(0, 0)
            minuto = RandomUtils.getRandomInt(0, 0)
        }

        return getDate(
            RandomUtils.getRandomInt(diaIni, diaFim),
            RandomUtils.getRandomInt(mesIni, mesFim),
            RandomUtils.getRandomInt(anoIni, anoFim),
            hora, minuto, format);
    }

}