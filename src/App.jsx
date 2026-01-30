import React, { Component } from 'react';
import "./App.css";

function App() {
  return (
    <>
     

      <div className="page-wrapper">
        <div className="main-container">
          <div className="university">
            KL University, Vaddeswaram Vijayawada
          </div>

          <div className="semester">📔 Even Semester ✍️</div>

          <div className="timetable-box">
            <div className="title">Time Table for CSE Students</div>

            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>7:10 - 8:00</th>
                  <th>8:00 - 8:50</th>
                  <th>9:20 - 10:10</th>
                  <th>10:10 - 11:00</th>
                  <th>11:10 - 12:00</th>
                  <th>12:00 - 12:50</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>DDCA</td>
                  <td>DDCA</td>
                  <td>DSA</td>
                  <td>DSA</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>MTFAI</td>
                  <td>MTFAI</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                  <td>DSA</td>
                  <td>DSA</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>DDCA</td>
                  <td>DDCA</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                  <td>DSA</td>
                  <td>DSA</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>DSA</td>
                  <td>DSA</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                  <td>CSE</td>
                  <td>CSE</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>DSA</td>
                  <td>DSA</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                  <td>CSE</td>
                  <td>CSE</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>MTFAI</td>
                  <td>MTFAI</td>
                  <td>FEDUI</td>
                  <td>FEDUI</td>
                  <td>DDCA</td>
                  <td>DDCA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
