import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";
import Header from "./components/Header";
import HomepageContent from "./components/HomepageContent";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomepageContent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
