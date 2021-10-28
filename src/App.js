import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import Registration from "./pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import EventList from "./pages/EventList/EventList";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/lists">
              <EventList />
            </Route>
            <Route exact path="/add-event">
              <EventList />
            </Route>
            <PrivateRoute exact path="/registration/:id">
              <Registration />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
