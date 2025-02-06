import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Input from "./components/Input/Input";
import Output from "./components/Output/Output";

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Input/>} />
        <Route path="/output" element={<Output />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
