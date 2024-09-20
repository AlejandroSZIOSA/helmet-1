import { useState } from "react";
import "./App.css";
//3 Router
//Fix: Switch mot "Routes"
import { Route, Routes, Link } from "react-router-dom";
import Home from "./component/Home.jsx";
import About from "./component/About.jsx";
/* import styled from "styled-components"; */

/* const Container = styled.div`
  background: "red";
`; */
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
