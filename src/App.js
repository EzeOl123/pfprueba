import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Route, Routes, Navigate } from "react-router-dom";
import Home2 from "./components/AND/Home2";
import ContactANDNav from "./components/AND/ContactANDNav";
import ProjectsANDNav from "./components/AND/ProjectsANDNav";
import SkillsANDNav from "./components/AND/SkillsANDNav";
import Main from "./components/Main";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route exact path="/contact" element={<ContactANDNav />} />
      <Route exact path="/projects" element={<ProjectsANDNav />} />
      <Route exact path="/experience" element={<SkillsANDNav />} />
    </Routes>
  );
}

export default App;
