import { CommonModule, formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltroModalComponent } from '../../components/filtro-modal/filtro-modal.component';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CommonModule, FormsModule, FiltroModalComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss',
})
export class ExtratoComponent {
  mostrarModalFiltro = false;
  extratoResponseMock = {
    paginaAtual: 1,
    totalPaginas: 1,
    itens: [
      {
        data: '2020-11-04T00:00:00',
        movimentacoes: [
          {
            tipoOperacao: 'Debito',
            tipoMovimentacao: 'Transferência - Liquidação',
            nomeProduto: 'MGLU3 - MAGAZINE LUIZA S/A',
            instituicao: 'CLEAR CORRETORA - GRUPO XP',
            quantidade: 300,
            valorOperacao: 7323,
            precoUnitario: 24.41,
            dataMovimentacao: '2020-11-04T00:00:00',
          },
          {
            tipoOperacao: 'Credito',
            tipoMovimentacao: 'Transferência - Liquidação',
            nomeProduto: 'VVAR3 - VIA VAREJO S.A.',
            instituicao: 'CLEAR CORRETORA - GRUPO XP',
            quantidade: 400,
            valorOperacao: 6920,
            precoUnitario: 17.3,
            dataMovimentacao: '2020-11-04T00:00:00',
          },
        ],
        totalItemsPagina: 2,
      },
      {
        data: '2020-10-30T00:00:00',
        movimentacoes: [
          {
            tipoOperacao: 'Credito',
            tipoMovimentacao: 'Transferência - Liquidação',
            nomeProduto: 'MGLU3 - MAGAZINE LUIZA S/A',
            instituicao: 'CLEAR CORRETORA - GRUPO XP',
            quantidade: 100,
            valorOperacao: 2488,
            precoUnitario: 24.88,
            dataMovimentacao: '2020-10-30T00:00:00',
          },
        ],
        totalItemsPagina: 1,
      },
    ],
  };

  formatarData(data: string): string {
    return formatDate(data, "dd 'de' MMMM 'de' yyyy", 'pt-BR');
  }

  obterCor(tipoOperacao: string): string {
    return tipoOperacao === 'Credito' ? 'bg-green-600' : 'bg-red-600';
  }

  abrirModalFiltro() {
    this.mostrarModalFiltro = true;
  }

  fecharModalFiltro() {
    this.mostrarModalFiltro = false;
  }

  aplicarFiltros(filtros: any) {
    this.fecharModalFiltro();
    console.log('Filtros aplicados:', filtros);
  }

  limparFiltros() {
    console.log('Filtros foram limpos');
    this.fecharModalFiltro();
  }
}
