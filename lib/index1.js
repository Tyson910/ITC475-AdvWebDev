//import React from 'react'
//import ReactDOM from "react-dom"
import Welcome from '/lib/Welcome.js';
import Clock from '/lib/clock.js';
import listy from '/lib/listy.js';
import activityData from '/lib/activityData.js';
import CitySelector from '/lib/citySelector.js';
import PickActivity from '/lib/activitySelector.js';

function App() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "welcome"
  }, /*#__PURE__*/React.createElement(Welcome, null), /*#__PURE__*/React.createElement(Clock, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(CitySelector, null)));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('greetings'));