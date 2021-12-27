import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import UsersState from "./context/users/UsersState";
import Header from "./components/UI/Header";
import Home from "./components/pages/Home";
import SinglePost from "./components/pages/SinglePost";
import About from "./components/pages/About";

const App = () => {
  return (
    <Router>
      <UsersState>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/single-post/:login" exact>
            <SinglePost />
          </Route>
        </Switch>
      </UsersState>
    </Router>
  );
};

export default App;
