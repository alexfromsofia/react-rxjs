import { ajax } from "rxjs/ajax";
import { map, catchError, of } from "rxjs";
import { Config } from "../types";

// [
//   1499040000000, // Open time
//   "0.01634790", // Open
//   "0.80000000", // High
//   "0.01575800", // Low
//   "0.01577100", // Close
//   "148976.11427815", // Volume
//   1499644799999, // Close time
//   "2434.19055334", // Quote asset volume
//   308, // Number of trades
//   "1756.87402397", // Taker buy base asset volume
//   "28.46694368", // Taker buy quote asset volume
//   "17928899.62484339", // Ignore.
// ];

export const getChartData$ = ({ interval, symbol }: Config) =>
  ajax
    .getJSON(
      `/api/v3/klines?limit=100&interval=${interval}&symbol=${symbol.toUpperCase()}`
    )
    .pipe(
      map((userResponse) => console.log("users: ", userResponse)),
      catchError((error) => {
        console.log("error: ", error);
        return of(error);
      })
    );
