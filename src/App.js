import Home from "./pages/home/Home";
import { Routes, Route, useParams } from "react-router-dom";
import Details from "./pages/home/details/Details";
import "./App.css";

function App() {
  const { tickerSymbol } = useParams("");

  return (
    <>
      <Routes>
        <Route path="/" element={<Home tickerSymbol={tickerSymbol} />} />
        <Route path="/details/:tickerSymbol" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
