import { useEffect } from "react";
import { BehaviorSubject } from "rxjs";
import { Config, Quote } from "../types";

export const chartData$ = new BehaviorSubject<Quote[]>([]);

/*
[
    1499040000000,      // Open time
    "0.01634790",       // Open
    "0.80000000",       // High
    "0.01575800",       // Low
    "0.01577100",       // Close
    "148976.11427815",  // Volume
    1499644799999,      // Close time
    "2434.19055334",    // Quote asset volume
    308,                // Number of trades
    "1756.87402397",    // Taker buy base asset volume
    "28.46694368",      // Taker buy quote asset volume
    "17928899.62484339" // Ignore.
  ]
*/

export const useChartData = ({ interval, symbol }: Config) => {
  useEffect(() => {
    let ignore = false;

    try {
      console.log("useChartData");

      fetch(
        `https://api.binance.com/api/v3/klines?interval=${interval}&symbol=${symbol.toUpperCase()}`
      )
        .then((res) => res.json())
        .then((value) => {
          if (!ignore) {
            console.log("UPDATING state");
            chartData$.next(value);
          }
        });
    } catch (error) {
      console.log(error);
    }

    return () => {
      ignore = true;
    };
  }, [interval, symbol]);
};
