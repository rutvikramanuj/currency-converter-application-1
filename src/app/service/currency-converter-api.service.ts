import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExchangeRatesResponse } from '../interfaces/currency-converter-interface';
@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterApiService {

  constructor(private http:HttpClient) { }

  /**
   * This API will be called to get currency rates to covert inserted amount to specific currency
   * @param base 
   * @returns 
   */
  getCurrencyRates(base: string): Observable<ExchangeRatesResponse> {
    return this.http.get<ExchangeRatesResponse>(`https://api.exchangerate.host/latest?source=ecb&base=${base}`);
  }
}

