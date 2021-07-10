import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Login from "./components/Login";
import About from "./components/About";
import { UserContext } from "./context/";
import ProtectedRoute from "./shared/ProtectedRoute";

function App() {
  const { username, logout } = useContext(UserContext);
  return (
    <Router>
      <header>
        {username ? (
          <h2 className="text-center">Welcome {username}</h2>
        ) : (
          <h2 className="text-center">Please log in to access keyboard.</h2>
        )}
      </header>
      <nav className="flex-wrap">
        {!username && (
          <NavLink
            activeClassName="active"
            className="link text-center"
            to="/login"
          >
            Login
          </NavLink>
        )}
        <NavLink
          activeClassName="active"
          className="link text-center"
          to="/about"
        >
          About
        </NavLink>

        {username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/keyboard"
            >
              Keyboard
            </NavLink>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/login"
              onClick={() => {
                logout();
              }}
            >
              Logout
            </NavLink>
          </>
        )}
      </nav>
      <main className="text-center">
        <Switch>
          <ProtectedRoute path="/login" reqUser={false}>
            <Login />
          </ProtectedRoute>
          <ProtectedRoute path="/keyboard" reqUser={true}>
            <Keyboard />
          </ProtectedRoute>
          <ProtectedRoute path="/about" reqUser={false}>
            <About />
          </ProtectedRoute>
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
