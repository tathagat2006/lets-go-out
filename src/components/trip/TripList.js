import React from "react";
import { Trip } from "./Trip";

export const TripList = ({ trips }) => {
  return (
    <div className="trips-list">
      <h3>Trips</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Place</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((trip) => (
            <Trip {...trip} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
