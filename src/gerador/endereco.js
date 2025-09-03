const RandomUtils = require('../utils/RandomUtils')
const estadosCidades = require('../utils/estados-cidades.json')

const logradouros = ['Rua', 'Avenida', 'Praça', 'Travessa']
const nomesLogradouro = ['das Flores', 'da Sé', 'da Paz', 'dos Coqueiros']
const bairros = ['Centro', 'Jardim América', 'Copacabana', 'Sé']

const CEP_SUFIXO_RURAL = '899'

const CEP_ESTADO = {
  ac: [[69900, 69999]],
  al: [[57000, 57999]],
  am: [
    [69000, 69299],
    [69400, 69899],
  ],
  ap: [[68900, 68999]],
  ba: [[40000, 48999]],
  ce: [[60000, 63999]],
  df: [
    [70000, 72799],
    [73000, 73699],
  ],
  es: [[29000, 29999]],
  go: [
    [72800, 72999],
    [73700, 76799],
  ],
  ma: [[65000, 65999]],
  mg: [[30000, 39999]],
  ms: [[79000, 79999]],
  mt: [[78000, 78899]],
  pa: [[66000, 68899]],
  pb: [[58000, 58999]],
  pe: [[50000, 56999]],
  pi: [[64000, 64999]],
  pr: [[80000, 87999]],
  rj: [[20000, 28999]],
  rn: [[59000, 59999]],
  ro: [[76800, 76999]],
  rr: [[69300, 69399]],
  rs: [[90000, 99999]],
  sc: [[88000, 89999]],
  se: [[49000, 49999]],
  sp: [[1000, 19999]],
  to: [[77000, 77999]],
}

function gerarCEP(uf, isSede = false, isRural = false) {
  const intervalos = CEP_ESTADO[uf.toLowerCase()]
  if (!intervalos) return ''

  const index = RandomUtils.getRandomInt(0, intervalos.length - 1)
  let cepPrefix =
    '' + RandomUtils.getRandomInt(intervalos[index][0], intervalos[index][1])
  cepPrefix = `${cepPrefix.length === 4 ? '0' : ''}${cepPrefix}-`

  if (isRural) return `${cepPrefix}${CEP_SUFIXO_RURAL}`
  if (isSede) return `${cepPrefix}000`

  let sufixo = '' + RandomUtils.getRandomInt(0, 999)
  sufixo = sufixo.padStart(3, '0')
  return `${cepPrefix}${sufixo}`
}

module.exports = {
  name: 'gerarEnderecoBR',
  displayName: 'Endereço BR',
  description: 'Gera um endereço brasileiro aleatório',
  args: [
    {
      displayName: 'Com CEP',
      description: 'Adiciona CEP aleatório',
      type: 'boolean',
      defaultValue: true,
    },
    {
      displayName: 'Distrito-sede',
      description: 'CEP de distrito-sede',
      type: 'boolean',
      defaultValue: false,
    },
    {
      displayName: 'Área Rural',
      description: 'CEP de área Rural',
      type: 'boolean',
      defaultValue: false,
    },
  ],
  async run(context, comCep, isSede, isRural) {
    const estado =
      estadosCidades.estados[
        RandomUtils.getRandomInt(0, estadosCidades.estados.length - 1)
      ]
    const cidade =
      estado.cidades[RandomUtils.getRandomInt(0, estado.cidades.length - 1)]

    const logradouro = `${
      logradouros[RandomUtils.getRandomInt(0, logradouros.length - 1)]
    } ${
      nomesLogradouro[RandomUtils.getRandomInt(0, nomesLogradouro.length - 1)]
    }`
    const bairro = bairros[RandomUtils.getRandomInt(0, bairros.length - 1)]
    const numero = RandomUtils.getRandomInt(1, 9999)

    const cep = comCep ? gerarCEP(estado.sigla, isSede, isRural) : ''

    return JSON.stringify(
      {
        cep,
        logradouro,
        numero,
        bairro,
        cidade,
        estado: estado.sigla,
      },
      null,
      2
    )
  },
}
