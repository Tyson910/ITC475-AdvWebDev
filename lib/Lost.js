import MatchingGame from './MatchingGame.js';
import Rules from './Rules.js';
const {
  useState
} = React;
export default function Lost() {
  const [replay, setReplay] = useState('');

  if (replay === 'play') {
    return /*#__PURE__*/React.createElement(MatchingGame, null);
  } else if (replay === 'rules') {
    return /*#__PURE__*/React.createElement(Rules, null);
  } else {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "Sorry, you Lost"), /*#__PURE__*/React.createElement("button", {
      className: "button-nav",
      id: "replay-button",
      onClick: () => {
        setReplay('play');
      }
    }, "Play Again"), /*#__PURE__*/React.createElement("button", {
      className: "button-nav",
      id: "replay-button",
      onClick: () => {
        setReplay('rules');
      }
    }, "View Rules"));
  }
}