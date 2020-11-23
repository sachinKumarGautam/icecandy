import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
