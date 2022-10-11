import Crypto from "./components/Crypto";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exchange from "./components/Exchange";
/* import Calculator from "./components/Calculator"; */
import Math from "./components/Math";
import LandingPage from "./components/LandingPage";
import Stopwatch from "./components/Stopwatch";
import ToDo from "./components/ToDo";
import Weather from "./components/Weather";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/exchange" element={<Exchange />} />      
              <Route path="/math" element={<Math />} />
              <Route path="/stopwatch" element={<Stopwatch />} />
              <Route path="/todo" element={<ToDo />} />
              <Route path="/weather" element={<Weather />} />              
              <Route index element={<LandingPage />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
