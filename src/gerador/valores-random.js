const RandomUtils = require('../utils/RandomUtils');


module.exports = {
    name: 'valorEmArrayRandom',
    displayName: 'Valor aleatório do array',
    description: 'Gera um valor aleatório do array de entrada',
    args: [
        {
            displayName: 'Lista separado por virgula',
            description: 'Lista de valores separado por virgula ","',
            type: 'string',
            defaultValue: null
        },

    ],
    async run(context, stringDeValores) {
        if (!stringDeValores) {
            throw new Error('É necessário informar o Array com os Valores!');
        }
        
        var values = stringDeValores.split(",")
        if (values.length === 0) {
            throw new Error('É necessário informar o Array com os Valores!');
        }

        return values[RandomUtils.getRandomInt(0, (values.length - 1))];
    }
}
