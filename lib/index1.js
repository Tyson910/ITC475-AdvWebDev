//import React from 'react'
//import ReactDOM from "react-dom"
import Welcome from '/lib/Welcome.js';
import Clock from '/lib/clock.js';
import activityData from '/lib/activityData.js';
import ActivitySelector from '/lib/activitySelector.js';

function App() {
  const bread = activityData('Maldives');
  const breadItems = bread.map(shit => /*#__PURE__*/React.createElement("li", null, shit));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    id: "welcome"
  }, /*#__PURE__*/React.createElement(Clock, null), /*#__PURE__*/React.createElement(Welcome, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ActivitySelector, null)));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('greetings'));