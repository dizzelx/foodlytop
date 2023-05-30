import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="menu" element={<Menu/>}/>
          <Route path="contacts" element={<Contacts/>}/>
        </Routes>
    </div>
  );
}

export default App;
