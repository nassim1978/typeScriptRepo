import logo from "./logo.svg";
import "./App.css";
import Plot from "react-plotly.js";
import BoxPlot from "./components/BoxPlot";
import HeatPlot from "./components/HeatPlot";
import PiePlot from "./components/PiePlot";
import SubPlot from "./components/SubPlot";
import TimePlot from "./components/TimePlot";
import Header from "./components/pageHeader";
import PageBody from "./components/pageBody";
import PageFooter from "./components/pageFooter";
import LoanForm from "./components/LoanComponents";
import "./styles/Page1.css";
function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <Header />
        <hr></hr>
        <div className="App" style={{ marginTop: "250px" }}>
          <LoanForm />
        </div>
      </div>
      <div className="Nbody123">
        <PageBody />
        <hr></hr>
      </div>
      <div className="App">
        <PageFooter />
        <h1>Bar Plot</h1>
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [1, 2, 3],
              type: "bar",
              mode: "lines+markers",
              maker: { color: "red" },
            },
          ]}
          layout={{ width: 1200, height: 600, title: "Simple Bar Plot" }}
        />
        <h1>Pie Plot</h1>
        <PiePlot />

        <h1>Box Plot</h1>
        <BoxPlot />

        <h1>Time Plot</h1>
        <TimePlot />

        <h1>Heat Plot</h1>
        <HeatPlot />

        <h1>SubPlot</h1>
        <SubPlot />
      </div>
    </div>
  );
}

export default App;
