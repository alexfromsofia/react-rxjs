import { useState, useEffect } from "react";
import "./App.css";
import { config } from "./constants";

import { chartData$, useChartData } from "./hooks/useChartData";

import { Quote } from "./types";
import { connect } from "./utils/socketConnect";

function App() {
  const [quote, setQuote] = useState<Quote[]>();
  const [chartData, setChartData] = useState<Quote[]>();
  const socket$ = connect(config);

  useChartData(config);

  useEffect(() => {
    const sub = socket$.subscribe((val) => {
      console.log(val);
    });

    return () => sub.unsubscribe();
  }, [socket$]);

  useEffect(() => {
    const sub = chartData$.subscribe(setChartData);

    return () => sub.unsubscribe();
  }, []);

  return <div className="App">Data</div>;
}

export default App;
