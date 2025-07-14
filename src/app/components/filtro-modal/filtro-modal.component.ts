import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filtro-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtro-modal.component.html',
  styleUrl: './filtro-modal.component.scss',
})
export class FiltroModalComponent {
  @Input() aberto = true;
  @Output() fechar = new EventEmitter<void>();
  @Output() filtroAplicado = new EventEmitter<any>();

  filtrosSelecionados = {
    dataInicial: '',
    dataFinal: '',
    diasSelecionados: 30,
    tiposMovimentacao: [''],
    tiposInvestimento: [''],
    instituicoes: [''],
  };

  periodosDisponiveis = [30, 90, 180, 365];
  tiposMovimentacao: string[] = [
    'Compra e venda',
    'Proventos recebidos',
    'Reembolso - Empréstimos',
    'Transferência',
    'Outros',
  ];
  tiposInvestimento: string[] = [
    'Ações',
    'BDR - Brazilian Depositary Receipts',
    'Fundos de Investimento',
    'Opções',
  ];
  instituicoes: string[] = [
    'MODAL DTVM LTDA',
    'NU INVEST CORRETORA',
    'XP INVESTIMENTOS 1',
    'XP INVESTIMENTOS 2',
    'XP INVESTIMENTOS 3',
  ];

  selecionarDias(dias: number) {
    this.filtrosSelecionados.diasSelecionados = dias;
    const hoje = new Date();
    const dataInicial = new Date();
    dataInicial.setDate(hoje.getDate() - dias);

    this.filtrosSelecionados.dataFinal = hoje.toISOString().substring(0, 10);
    this.filtrosSelecionados.dataInicial = dataInicial
      .toISOString()
      .substring(0, 10);
  }

  toggleOpcao(lista: string[], valor: string) {
    const index = lista.indexOf(valor);
    if (index === -1) {
      lista.push(valor);
    } else {
      lista.splice(index, 1);
    }
  }

  limparFiltro() {
    this.filtrosSelecionados = {
      dataInicial: '',
      dataFinal: '',
      diasSelecionados: 30,
      tiposMovimentacao: [],
      tiposInvestimento: [],
      instituicoes: [],
    };
  }

  aplicarFiltro() {
    this.filtroAplicado.emit(this.filtrosSelecionados);
  }

  fecharModal() {
    this.fechar.emit();
  }
}
