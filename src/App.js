import React, { useContext, useState, useEffect } from "react";
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
import Location from "./components/Location";
import Sequencer from "./components/Sequencer";
import { UserContext, LocationContext } from "./context/";
import ProtectedRoute from "./shared/ProtectedRoute";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Spinner } from "react-bootstrap";

function App() {
  const location = useLocation();
  const { username, logout } = useContext(UserContext);
  const { clearSearch } = useContext(LocationContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <header>
            {username ? (
              <div className="space-between">
                <img className="logo" src="mz101logo.png" />
                <h6 className="text-center welcome">Welcome, {username}</h6>
                <div className="logo" />
              </div>
            ) : (
              <div className="space-between">
                <img className="logo" src="mz101logo.png" />
                <h6 className="text-center welcome">
                  Please log in to access keyboard.
                </h6>
                <div className="logo" />
              </div>
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
                  to="/sequencer"
                >
                  Sequencer
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="link text-center"
                  to="/location"
                >
                  Drone
                </NavLink>
                <NavLink
                  activeClassName="active"
                  className="link text-center"
                  to="/login"
                  onClick={() => {
                    logout();
                    clearSearch();
                  }}
                >
                  Logout
                </NavLink>
              </>
            )}
            <NavLink
              activeClassName="active"
              className="link text-center"
              to="/about"
            >
              About
            </NavLink>
          </nav>

          <main className="text-center">
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
              <ProtectedRoute path="/sequencer" reqUser={true}>
                <Sequencer />
              </ProtectedRoute>
              <ProtectedRoute path="/location" reqUser={true}>
                <Location />
              </ProtectedRoute>
              <Route path="/about">
                <About />
              </Route>
              <Route path="*">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </main>

          <footer className="text-center">
            <div>Last updated: 9/20/2021</div>
          </footer>
        </>
      ) : (
        <div className="loading">
          <Spinner animation="border" />
        </div>
      )}
    </>
  );
}

export default App;
