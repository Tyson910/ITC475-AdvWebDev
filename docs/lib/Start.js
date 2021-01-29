const {
  useState
} = React;
import MatchingGame from './MatchingGame.js';
import Rules from './Rules.js';
export default function Start() {
  const [fauxRoute, setFauxRoute] = useState('');

  switch (fauxRoute) {
    case 'newGame':
      return /*#__PURE__*/React.createElement(MatchingGame, null);

    case 'rules':
      return /*#__PURE__*/React.createElement(Rules, null);

    default:
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Welcome"), /*#__PURE__*/React.createElement("div", {
        className: "start-nav"
      }, /*#__PURE__*/React.createElement("button", {
        className: "button-nav",
        onClick: () => {
          setFauxRoute('rules');
        }
      }, "Game Rules"), /*#__PURE__*/React.createElement("button", {
        className: "button-nav",
        onClick: () => {
          setFauxRoute('newGame');
        }
      }, "New Game"), /*#__PURE__*/React.createElement("a", {
        className: "button-nav",
        href: "action.php"
      }, " High Scores ")));
  }
}