import { useEffect } from "react";
import "./App.css";
import { config } from "./constants";

import { getChartData$ } from "./utils/getChartData";
import { connect } from "./utils/socketConnect";

function App() {
  // const [quote, setQuote] = useState<Quote[]>();
  // const [chartData, setChartData] = useState<Quote[]>();
  const socket$ = connect(config);

  useEffect(() => {
    const sock = socket$.subscribe((val) => {
      console.log(val);
    });

    return () => sock.unsubscribe();
  }, [socket$]);

  useEffect(() => {
    getChartData$(config).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err),
    });
  }, []);

  return <div className="App">Data</div>;
}

export default App;
