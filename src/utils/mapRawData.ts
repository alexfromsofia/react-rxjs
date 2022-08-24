export interface Data {
  t: number;
  T: number;
  s: string;
  i: string;
  f: number;
  L: number;
  o: string;
  c: string;
  h: string;
  l: string;
  v: string;
  n: number;
  x: boolean;
  q: string;
  V: string;
  Q: string;
  B: string;
}

export interface Response {
  e: string;
  E: number;
  s: string;
  k: Data;
}

export interface Data {
  t: number;
  T: number;
  s: string;
  i: string;
  f: number;
  L: number;
  o: string;
  c: string;
  h: string;
  l: string;
  v: string;
  n: number;
  x: boolean;
  q: string;
  V: string;
  Q: string;
  B: string;
}

export interface Response {
  e: string;
  E: number;
  s: string;
  k: Data;
}

export const mapRawData = ({ E, e, k, s }: Response) => ({
  eventType: e,
  eventTime: E,
  symbol: s,
  startTime: k.t,
  closeTime: k.T,
  interval: k.i,
  openPrice: k.o,
  closePrice: k.c,
  highPrice: k.h,
  lowPrice: k.l,
  baseAssetVoluem: k.v,
});
