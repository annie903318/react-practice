import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Recover from "./routes/Recover";

// import People from "./routes/People";
// import Electronics from "./routes/Electronics";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/recover" exact component={Recover} />
      {/* <Route path="/people/:age" exact component={People} />
      <Route path="/electronics" exact component={Electronics} /> */}
    </Switch>
  </BrowserRouter>
);