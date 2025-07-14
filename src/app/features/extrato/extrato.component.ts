import { CommonModule, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltroModalComponent } from '../../components/filtro-modal/filtro-modal.component';
import { ExtratoService } from '../../core/services/extrato.service';
import { ExtratoResponse } from '../../core/models/extrato-response';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [CommonModule, FormsModule, FiltroModalComponent],
  templateUrl: './extrato.component.html',
  styleUrl: './extrato.component.scss',
})
export class ExtratoComponent implements OnInit {
  mostrarModalFiltro = false;
  extratoResponse?: ExtratoResponse;
  dataInicio!: string;
  dataFim!: string;

  constructor(private extratoService: ExtratoService) {}

  ngOnInit() {
    this.atualData();
    this.buscarExtrato(this.dataInicio, this.dataFim);
  }

  atualData(): void {
    const hoje = new Date();
    const trintaDiasAtras = new Date();
    trintaDiasAtras.setDate(hoje.getDate() - 30);

    this.dataInicio = this.formatarDataISO(trintaDiasAtras);
    this.dataFim = this.formatarDataISO(hoje);
  }

  buscarExtrato(dataInicio: string, dataFim: string) {
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;

    const guid = '27f97fe1-b741-4243-be91-c9ae74249639';

    this.extratoService.buscarExtrato(dataInicio, dataFim, 1, guid).subscribe({
      next: (res) => {
        this.extratoResponse = res;
      },
      error: (err) => {
        console.error('Erro ao buscar extrato:', err);
      },
    });
  }

  formatarData(data: string): string {
    return formatDate(data, "dd 'de' MMMM 'de' yyyy", 'pt-BR');
  }

  formatarDataExibicao(data: string): string {
    return formatDate(data, 'dd/MM/yyyy', 'pt-BR');
  }

  formatarDataISO(data: Date): string {
    return data.toISOString().split('T')[0];
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
    this.buscarExtrato(filtros.dataInicial, filtros.dataFinal);
  }

  limparFiltros() {
    this.atualData();
    this.buscarExtrato(this.dataInicio, this.dataFim);
    this.fecharModalFiltro();
  }
}
