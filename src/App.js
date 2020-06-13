import React from "react";
import { Nav } from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddTrip } from "./components/trip/AddTrip";
import { TripList } from "./components/trip/TripList";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTrips: [
        {
          place: "Delhi",
          date: "2020-06-06",
          type: "Club",
        },
        {
          place: "Rajasthan",
          date: "2020-06-07",
          type: "Club",
        },
      ],
    };
    this.addTrip = this.addTrip.bind(this);
  }

  addTrip(newTrip) {
    this.setState((prevState) => {
      return {
        allTrips: [...prevState.allTrips, newTrip],
      };
    });
  }

  render() {
    return (
      <Router>
        <div className="route-container">
          <Nav />
          <Switch>
            <Route
              path="/list"
              render={(props) => (
                <TripList {...props} trips={this.state.allTrips} />
              )}
            />
            <Route
              path="/add"
              render={(props) => (
                <AddTrip {...props} AddNewTrip={this.addTrip} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

// Components
//  -> functional based
//  -> class based

export default App;
