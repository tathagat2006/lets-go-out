import React from "react";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="route-container">
          <Nav />
        </div>
      </Router>
    );
  }
}

// Components
//  -> functional based
//  -> class based

export default App;
