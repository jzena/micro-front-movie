import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Home from "./Home";
import Header from "../components/Header";
import MovieDetail from "../components/MovieDetail";


// const repo = `/${ window.location.pathname.split('/')[1] }`;
const App = () => {
  console.log('PUBLIC_URL:::', process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <div className="App">
        <Header text="HOOKED" />
        <Switch>
          <Route path="/" component={ Home } exact />
          <Route path="/movie/:id" component={ MovieDetail } exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;