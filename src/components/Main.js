import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import Footer from "./Footer";
import Details from "./Details";
export default function Main() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/details/:ingredients" exact component={Details} />
      </Switch>
      <Footer />
    </>
  );
}
