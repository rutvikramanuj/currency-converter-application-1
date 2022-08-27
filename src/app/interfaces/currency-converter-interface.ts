/**
 * This interface will be assigned as Exchange rates Response
 */
export interface ExchangeRatesResponse{
    rates:{
        [key:string]:number
    },
    base:string,
    date:string,
    motd:{msg:string,url:string},
    success:boolean
}