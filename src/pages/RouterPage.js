
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Blog from "./Blog";
import Contact from "./Contact";
import Shop from "./Shop/Shop";
import Singlepage from "./Singlepage";

export default function RouterPage() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/singlepage" exact component={Singlepage} />
        </Switch>
      </Router>
    </>
  );
}
