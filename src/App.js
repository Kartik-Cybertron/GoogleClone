import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="app">
      {/* <h1>GoogleClone</h1> */}
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
            {/* <h1>this is SearchPage</h1> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
          {/* home  */}
          {/* search page */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
