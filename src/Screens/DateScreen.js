import React from "react";
import "./DateScreen.css";

export default function DateScreen() {
  return (
    <div id="date-home">
      <div id="date-block">
        <h1>Événements, dates et concerts...</h1>
        <div className="dates">
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Lieu</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
              <tr>
                <td>...</td>
                <td>...</td>
                <td>...</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
