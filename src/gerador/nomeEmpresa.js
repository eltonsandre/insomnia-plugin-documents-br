const RandomUtils = require('../utils/RandomUtils');

const TIPOS_EMPRESAS = [
  'EI', 'EIRELI', 'EPP', 'LTDA', 'ME', 'SA'
];

const SETORES_EMPRESARIAIS = [
  'Advocacia', 'Comercio', 'Consutoria', 'Contabilidade', 'Eletronicos', 'Industria', 'Informatica', 'Servicos', 'Tecnologia', 'Transportes', 'Varejo'
]

const SOBRENOMES = [
  'Almeida', 'Alves', 'Andrade', 'Barbosa', 'Barros', 'Batista',
  'Borges', 'Campos', 'Cardoso', 'Carvalho', 'Castro', 'Costa',
  'Dias', 'Duarte', 'Freitas', 'Fernandes', 'Ferreira', 'Garcia',
  'Gomes', 'Gonçalves', 'Lima', 'Lopes', 'Machado', 'Marques',
  'Martins', 'Medeiros', 'Melo', 'Mendes', 'Miranda', 'Monteiro',
  'Moraes', 'Moreira', 'Moura', 'Nascimento', 'Nunes', 'Oliveira',
  'Pereira', 'Ramos', 'Reis', 'Ribeiro', 'Rocha', 'Santana', 'Santos',
  'Silva', 'Soares', 'Souza', 'Teixeira', 'Vieira',
];

module.exports = {
  name: 'gerarNomeEmpresa',
  displayName: 'nomeEmpresa',
  description: 'Gera um nome de empresa aleatório seguido por paramentros',
  args: [
    //Nome da Empresa
    {
      displayName: 'Primeiro nome da empresa fixo',
      description: 'Mantém o primeiro nome fixo',
      type: 'string',
      defaultValue: ''
    },
    {
      displayName: 'Segundo nome da empresa fixo',
      description: 'Mantém o segundo nome fixo',
      type: 'string',
      defaultValue: ''
    },
    {
      displayName: 'Nome empresarial composto?',
      description: 'Utiliza nome empresarial composto Ex: "Correia e Souza" Tecnologia LTDA',
      type: 'boolean',
      defaultValue: 'true'
    },
    {
      displayName: 'Setor empresarial fixo',
      description: 'Mantém o setor da empresa fixo, Ex: Sacramento "Tecnologias" LTDA',
      type: 'string',
      defaultValue: ''
    },
    {
      displayName: 'Tipo da empresa fixo',
      description: 'Mantém o tipo da empresa fixo, Ex: Empresa "LTDA"',
      type: 'string',
      defaultValue: ''
    },



  ],

  async run(context, primeiroNomeParam, segundoNomeParam, isComposto, setorEmpresaParam, tipoEmpresaParam) {
    var nomeEmpresa = '';
    var setorEmpresa = setorEmpresaParam;
    var tipoEmpresa = tipoEmpresaParam;

    if (isComposto) {
      nomeEmpresa = primeiroNomeParam != "" ? primeiroNomeParam : SOBRENOMES[RandomUtils.getRandomInt(0, (SOBRENOMES.length - 1))];
      nomeEmpresa += ' e ';
      nomeEmpresa += segundoNomeParam != "" ? segundoNomeParam : SOBRENOMES[RandomUtils.getRandomInt(0, (SOBRENOMES.length - 1))];
    } else {
      nomeEmpresa = primeiroNomeParam != "" ? primeiroNomeParam : SOBRENOMES[RandomUtils.getRandomInt(0, (SOBRENOMES.length - 1))];
    }

    if (!setorEmpresa) {
      setorEmpresa = SETORES_EMPRESARIAIS[RandomUtils.getRandomInt(0, (SETORES_EMPRESARIAIS.length - 1))];
    }

    if (!tipoEmpresa) {
      tipoEmpresa = TIPOS_EMPRESAS[RandomUtils.getRandomInt(0, (TIPOS_EMPRESAS.length - 1))];
    }

    return `${nomeEmpresa} ${setorEmpresa} ${tipoEmpresa}`;
  }
}
