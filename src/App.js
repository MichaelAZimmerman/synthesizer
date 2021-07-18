import React, { useContext } from "react";
import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "@fontsource/roboto";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Login from "./components/Login";
import About from "./components/About";
import Signup from "./components/Signup";
import { UserContext } from "./context/";
import ProtectedRoute from "./shared/ProtectedRoute";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  const location = useLocation();
  const { username, logout } = useContext(UserContext);

  return (
    <>
      <header>
        {username ? (
          <h2 className="text-center">Welcome {username}</h2>
        ) : (
          <h2 className="text-center">Please log in to access keyboard.</h2>
        )}
      </header>
      <nav className="flex-wrap">
        {!username && (
          <>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/signup"
            >
              Sign Up
            </NavLink>
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/login"
            >
              Login
            </NavLink>
          </>
        )}

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
              to="/about"
            >
              About
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
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={1000}>
            <Switch location={location}>
              <ProtectedRoute path="/login" reqUser={false}>
                <Login />
              </ProtectedRoute>
              <ProtectedRoute path="/signup" reqUser={false}>
                <Signup />
              </ProtectedRoute>
              <ProtectedRoute path="/keyboard" reqUser={true}>
                <Keyboard />
              </ProtectedRoute>
              <ProtectedRoute path="/about" reqUser={true}>
                <About />
              </ProtectedRoute>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    </>
  );
}

export default App;
