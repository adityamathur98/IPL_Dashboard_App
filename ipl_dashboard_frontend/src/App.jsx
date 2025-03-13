import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import TeamMatches from "./components/TeamMatches";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ipl" element={<HomePage />} />
      <Route path="/ipl/:id" element={<TeamMatches />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
