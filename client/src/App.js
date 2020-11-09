// import React, { Component } from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Routes from './Components/Routes/Routes'
// export default class App extends Component {
//   render () {
//     return (
//       <div>
//         <Navbar />
//         <Routes />
//       </div>
//     )
//   }
// }


import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";
import { StoreProvider } from "./utils/GlobalState";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;