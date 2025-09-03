const estadosCidades = require('../utils/estados-cidades.json')
const RandomUtils = require('../utils/RandomUtils')

module.exports = {
  name: 'estado',
  displayName: 'Estado',
  description: 'Gera um estado brasileiro aleatório (sigla ou nome completo)',
  args: [
    {
      displayName: 'Formato',
      description: 'Define se o retorno será sigla ou nome completo',
      type: 'enum',
      defaultValue: 'sigla',
      options: [
        { displayName: 'Sigla', value: 'sigla' },
        { displayName: 'Nome Completo', value: 'nome' },
      ],
    },
  ],
  run(context, formato) {
    const estado =
      estadosCidades.estados[
        RandomUtils.getRandomInt(0, estadosCidades.estados.length - 1)
      ]

    if (formato === 'nome') {
      return estado.nome
    }

    return estado.sigla
  },
}
