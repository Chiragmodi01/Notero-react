import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Homepage />}/>
      </Routes>
    </div>
  );
}

export default App;
