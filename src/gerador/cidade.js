const estadosCidades = require('../utils/estados-cidades.json')
const RandomUtils = require('../utils/RandomUtils')

module.exports = {
  name: 'cidade',
  displayName: 'Cidade',
  description: 'Gera uma cidade brasileira aleatória',
  args: [],
  run(context) {
    const estado =
      estadosCidades.estados[
        RandomUtils.getRandomInt(0, estadosCidades.estados.length - 1)
      ]
    const cidade =
      estado.cidades[RandomUtils.getRandomInt(0, estado.cidades.length - 1)]
    return cidade
  },
}
