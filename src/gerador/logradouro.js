const RandomUtils = require('../utils/RandomUtils')
const logradouros = [
  'Rua',
  'Avenida',
  'Praça',
  'Travessa',
  'Alameda',
  'Rodovia',
  'Estrada',
  'Largo',
  'Vila',
  'Quadra',
  'Setor',
  'Conjunto',
  'Parque',
  'Via',
  'Passeio',
]
const nomesLogradouro = [
  'das Flores',
  'dos Coqueiros',
  'das Palmeiras',
  'dos Ipês',
  'das Acácias',
  'dos Pinheiros',
  'das Orquídeas',
  'dos Jasmins',
  'da Liberdade',
  'da Independência',
  'da República',
  'da União',
  'da Constituição',
  'Getúlio Vargas',
  'Dom Pedro II',
  'Marechal Deodoro',
  'Santos Dumont',
  'Tiradentes',
  'da Sé',
  'da Paz',
  'do Rosário',
  'São João',
  'Nossa Senhora Aparecida',
  'do Café',
  'do Açúcar',
  'do Ouro',
  'da Praia',
  'das Dunas',
  'do Sertão',
  'da Serra',
  'do Vale',
]

module.exports = {
  name: 'logradouro',
  displayName: 'Logradouro',
  description: 'Gera um logradouro brasileiro aleatório',
  args: [],
  run(context) {
    const tipo =
      logradouros[RandomUtils.getRandomInt(0, logradouros.length - 1)]
    const nome =
      nomesLogradouro[RandomUtils.getRandomInt(0, nomesLogradouro.length - 1)]
    return `${tipo} ${nome}`
  },
}
