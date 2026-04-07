import { useState } from 'react'
import {Link,BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "./routes/routes";
import './App.css'

function App() {
  //const history = useHistory();

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          bezKoder
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;