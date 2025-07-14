export interface ExtratoResponse {
  paginaAtual: number;
  totalPaginas: number;
  itens: ExtratoItem[];
  detalheStatusCode: number;
  excecoes: any[];
}

export interface ExtratoItem {
  data: string;
  movimentacoes: Movimentacao[];
  totalItemsPagina: number;
}

export interface Movimentacao {
  tipoOperacao: 'Credito' | 'Debito' | string;
  tipoMovimentacao: string;
  nomeProduto: string;
  instituicao: string;
  quantidade: number;
  valorOperacao: number;
  precoUnitario: number;
  dataMovimentacao: string; 
}
