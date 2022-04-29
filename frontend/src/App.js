import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import HomepageContent from "./components/HomepageContent";
import RacismContent from "./components/RacismContent";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomepageContent />} />
          <Route path="/topics/racism" element={<RacismContent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
