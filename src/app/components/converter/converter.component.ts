import { Component, OnInit } from '@angular/core';
import { ExchangeRatesResponse } from 'src/app/interfaces/currency-converter-interface';
import { CurrencyConverterApiService } from 'src/app/service/currency-converter-api.service';
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount: number = 1; // to store user input for amount
  from: string = 'CAD'; // to store Currency dropdown [from]
  to: string = 'USD'; // to store Currency dropdown [to]
  rates!: { [key: string]: number }; // to store currency rates List for dropdown list
  ngOnInit(): void {}
  constructor(
    private currencyConverterApiService: CurrencyConverterApiService
  ) {
    this.getCurrencyRates();
  }

  /**
   * This function will calulate entered amount to specific currency rate
   * @returns
   */
  public convert(): number {
    return (this.amount ? this.amount : 1.0) * this.rates[this.to];
  }

  /**
   * This function will be called to get all currency list to display dropdown values
   * @returns
   */
  public getAllCurrencyList(): string[] {
    return Object.keys(this.rates);
  }

  /**
   * This function will be called to get Currency Rates
   */
  public getCurrencyRates() {
    this.currencyConverterApiService
      .getCurrencyRates(this.from)
      .subscribe((response: ExchangeRatesResponse) => {
        this.rates = response.rates;
      });
  }
}
