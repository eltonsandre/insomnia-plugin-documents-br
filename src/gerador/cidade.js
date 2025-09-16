const estadosCidades = require('../utils/estados-cidades.json')
const RandomUtils = require('../utils/RandomUtils')

module.exports = {
  name: 'cidade',
  displayName: 'Cidade',
  description: 'Gera uma cidade brasileira aleatória (pode ser limitada a um estado)',
  args: [
    {
      displayName: 'Estado',
      description: 'Sigla do estado',
      type: 'string',
      defaultValue: '',
    },
  ],
  run(context, estadoSigla) {
    let estado

    if (estadoSigla && estadoSigla.trim() !== '') {
      estado = estadosCidades.estados.find(
        (e) => e.sigla.toLowerCase() === estadoSigla.toLowerCase()
      )
    }

    if (!estado) {
      estado =
        estadosCidades.estados[
          RandomUtils.getRandomInt(0, estadosCidades.estados.length - 1)
        ]
    }

    const cidade =
      estado.cidades[RandomUtils.getRandomInt(0, estado.cidades.length - 1)]

    return cidade
  },
}
