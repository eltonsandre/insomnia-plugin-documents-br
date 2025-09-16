const RandomUtils = require('../utils/RandomUtils')

const bairros = ['Centro', 'Jardim América', 'Copacabana', 'Sé']

module.exports = {
  name: 'bairro',
  displayName: 'Bairro',
  description: 'Gera um bairro brasileiro aleatório',
  args: [],
  run(context) {
    return bairros[RandomUtils.getRandomInt(0, bairros.length - 1)]
  },
}
