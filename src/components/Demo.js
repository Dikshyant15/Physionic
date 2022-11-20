import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from './login'


/**
 * https://stackoverflow.com/questions/71161792/react-router-rendering-blank-page
 */

const Home = () => <h1>Home</h1>;

export const Demo=()=> {
  return (
    <div className="App">
      <Router>
        <header>
          <div className="logo">MyPortfolio</div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
           
          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" component={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
