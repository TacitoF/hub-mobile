export const currentUser = {
  id: '1',
  name: 'Reinaldo Neto',
  email: 'reinaldo.neto@seplag.pe.gov.br',
  orgao: 'Secretaria de Planejamento e Gestão',
  orgaoAbrev: 'SEPLAG',
  setor: 'Diretoria de Tecnologia e Inovação',
  cargo: 'Analista de Dados',
  avatar: 'RN',
};

export type DashCategory = 'saude' | 'educacao' | 'seguranca' | 'financas' | 'infraestrutura' | 'gestao';

export interface Dashboard {
  id: string;
  title: string;
  description: string;
  category: DashCategory;
  orgao: string;
  orgaoAbrev: string;
  lastUpdated: string;
  views: number;
  isFavorite: boolean;
  color: string;
  icon: string;
}

export const dashboards: Dashboard[] = [
  {
    id: '1',
    title: 'Painel de Matrículas Escolares',
    description: 'Acompanhamento de matrículas por município, etapa e tipo de educação em Pernambuco.',
    category: 'educacao',
    orgao: 'Secretaria de Educação',
    orgaoAbrev: 'SEE',
    lastUpdated: '2025-05-08',
    views: 1423,
    isFavorite: true,
    color: '#0034B7',
    icon: '🎓',
  },
  {
    id: '2',
    title: 'Monitoramento de UPAs',
    description: 'Indicadores de atendimento, ocupação e desempenho das Unidades de Pronto Atendimento.',
    category: 'saude',
    orgao: 'Secretaria de Saúde',
    orgaoAbrev: 'SES',
    lastUpdated: '2025-05-09',
    views: 987,
    isFavorite: true,
    color: '#136B10',
    icon: '🏥',
  },
  {
    id: '3',
    title: 'Gestão de Projetos SETD',
    description: 'Linha do tempo, entregas, impedimentos e progresso dos projetos de transformação digital.',
    category: 'gestao',
    orgao: 'Sec. Exec. de Transformação Digital',
    orgaoAbrev: 'SETD',
    lastUpdated: '2025-05-10',
    views: 654,
    isFavorite: false,
    color: '#337FFF',
    icon: '📊',
  },
  {
    id: '4',
    title: 'Execução Orçamentária 2025',
    description: 'Receitas, despesas, empenhos e liquidações do orçamento do Estado por secretaria.',
    category: 'financas',
    orgao: 'Secretaria da Fazenda',
    orgaoAbrev: 'SEFAZ',
    lastUpdated: '2025-05-07',
    views: 2341,
    isFavorite: false,
    color: '#B77706',
    icon: '💰',
  },
  {
    id: '5',
    title: 'Índice de Criminalidade',
    description: 'Crimes violentos, homicídios e ocorrências por região, bairro e mês.',
    category: 'seguranca',
    orgao: 'Secretaria de Defesa Social',
    orgaoAbrev: 'SDS',
    lastUpdated: '2025-05-06',
    views: 1102,
    isFavorite: false,
    color: '#D83535',
    icon: '🛡️',
  },
  {
    id: '6',
    title: 'Obras e Infraestrutura',
    description: 'Acompanhamento de obras públicas, cronogramas e percentual de execução física.',
    category: 'infraestrutura',
    orgao: 'Secretaria de Infraestrutura',
    orgaoAbrev: 'SEINFRA',
    lastUpdated: '2025-05-05',
    views: 543,
    isFavorite: false,
    color: '#494C57',
    icon: '🏗️',
  },
  {
    id: '7',
    title: 'Vacinação Pernambuco',
    description: 'Cobertura vacinal por município, público-alvo e tipo de imunizante.',
    category: 'saude',
    orgao: 'Secretaria de Saúde',
    orgaoAbrev: 'SES',
    lastUpdated: '2025-05-09',
    views: 876,
    isFavorite: true,
    color: '#136B10',
    icon: '💉',
  },
  {
    id: '8',
    title: 'Recursos Humanos do Estado',
    description: 'Quantitativo de servidores, distribuição por lotação, faixa salarial e tipo de vínculo.',
    category: 'gestao',
    orgao: 'Secretaria de Planejamento e Gestão',
    orgaoAbrev: 'SEPLAG',
    lastUpdated: '2025-05-08',
    views: 731,
    isFavorite: false,
    color: '#337FFF',
    icon: '👥',
  },
];

export const categories = [
  { key: 'todos', label: 'Todos' },
  { key: 'favoritos', label: 'Favoritos' },
  { key: 'saude', label: 'Saúde' },
  { key: 'educacao', label: 'Educação' },
  { key: 'gestao', label: 'Gestão' },
  { key: 'financas', label: 'Finanças' },
  { key: 'seguranca', label: 'Segurança' },
  { key: 'infraestrutura', label: 'Infraestrutura' },
];
