import Welcome from '/lib/Welcome.js';
import Clock from '/lib/clock.js';
import RSVPform from '/lib/RSVPform.js';

function App() {
  return /*#__PURE__*/React.createElement("div", {
    id: "welcome"
  }, /*#__PURE__*/React.createElement(Clock, null), /*#__PURE__*/React.createElement(Welcome, null));
}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('greetings'));
ReactDOM.render( /*#__PURE__*/React.createElement(RSVPform, null), document.getElementById('rsvpForm'));