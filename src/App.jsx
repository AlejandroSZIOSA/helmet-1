import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//3 Router
//Fix: Switch mot "Routes"
import { Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/about" Component={About} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
