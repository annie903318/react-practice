import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Index from "./routes/Index";
import Recover from "./routes/Recover/Recover";
import Newevent from "./routes/Newevent/Newevent";
import Contents from "./routes/Contents/Contents";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/recover" exact component={Recover} />
      <Route path="/newevent" exact component={Newevent} />
      <Route path="/contents" exact component={Contents} />
    </Switch>
  </BrowserRouter>
);