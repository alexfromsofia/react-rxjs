import { mapRawData } from "./utils/mapRawData";

export interface Config {
  symbol: "ethusdt" | "btcusdt";
  interval: "5m" | "15m" | "30m" | "1h" | "1d";
}

export type Quote = ReturnType<typeof mapRawData>;
