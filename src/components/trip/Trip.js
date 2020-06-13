import React from "react";

export const Trip = ({ date, place, type }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{place}</td>
      <td>{type}</td>
    </tr>
  );
};
