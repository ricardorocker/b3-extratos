import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ExtratoResponse } from '../models/extrato-response';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  private baseUrl = 'http://localhost:3000/extrato-movimentacao';

  constructor(private http: HttpClient) {}

  buscarExtrato(
    dataInicio: string,
    dataFim: string,
    pagina: number,
    cacheGuid: string
  ): Observable<ExtratoResponse> {
    const params = new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim)
      .set('pagina', pagina.toString())
      .set('cache-guid', cacheGuid);

    return this.http.get<ExtratoResponse>(this.baseUrl, { params }).pipe(
      map((res) => {
        const dataIni = new Date(dataInicio);
        const dataFimDate = new Date(dataFim);

        const itensFiltrados = res.itens.filter((item) => {
          const dataItem = new Date(item.data);
          return dataItem >= dataIni && dataItem <= dataFimDate;
        });

        return {
          ...res,
          itens: itensFiltrados,
        };
      })
    );
  }
}
