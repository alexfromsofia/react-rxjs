import { throttle, interval as intervalOperator, map } from "rxjs";
import { webSocket } from "rxjs/webSocket";
import { Config } from "../types";
import { mapRawData, Response } from "./mapRawData";

// const MAX_QUOTE_NUMBER = 10;
const QUOTE_INTERVAL = 1000;

export const connect = ({ interval, symbol }: Config) => {
  return webSocket<Response>(
    `wss://fstream.binance.com/ws/${symbol}@kline_${interval}`
  ).pipe(
    throttle(() => intervalOperator(QUOTE_INTERVAL)),
    map((val) => mapRawData(val))
  );
};
