import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiceyNavMenu from "./components/DiceyNavMenu";
import Start from "./pages/Start";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DiceyNavMenu/>
        <Routes>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
