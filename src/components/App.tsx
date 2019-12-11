import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../pages/About"));

const App = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </React.Suspense>
  </Router>
);

export default App;
