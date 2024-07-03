import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VehicleDetails from "./pages/VehicleDetails";
import Response from "./pages/Response";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicle" element={<VehicleDetails />} />
          <Route path="/response" element={<Response />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
