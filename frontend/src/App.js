import { createContext, useReducer } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";

import Header from "./components/Header";
import HomepageContent from "./components/HomepageContent";
import RacismContent from "./components/RacismContent";
import Login from "./components/Login";
import Register from "./components/Register";
import Comments from "./components/Comments";

import { userDetails, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, userDetails);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<HomepageContent />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/topics/racism" element={<RacismContent />} />
            <Route path="/topics/racism/comments" element={<Comments />} />
          </Routes>
        </div>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
