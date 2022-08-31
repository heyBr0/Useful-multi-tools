import Crypto from "./Crypto";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Exchange from "./Exchange";
import Calculator from "./Calculator";
import Math from "./Math";
import Notes from "./Notes";

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/crypto" element={<Crypto />} />
              <Route exact path="/exchange" element={<Exchange />} />
              <Route exact path="/calculator" element={<Calculator />} />
              <Route exact path="/math" element={<Math />} />
              <Route exact path="/notes" element={<Notes />} />

              {/*     <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
