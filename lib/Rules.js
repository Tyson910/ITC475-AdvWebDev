const {
  useState
} = React;
import MatchingGame from './MatchingGame.js';
export default function Rules() {
  const [gameRoute, setGameRoute] = useState('');

  if (gameRoute) {
    return /*#__PURE__*/React.createElement(MatchingGame, null);
  } else {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello and welcome to my card matching game!"), /*#__PURE__*/React.createElement("div", null, "The goal of the game is to match all cards with their pairs as quickly as possible"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Before the game begins you will be shown 8 cards face up for 3 seconds"), /*#__PURE__*/React.createElement("li", null, "Once the cards are flipped down the timer begins"), /*#__PURE__*/React.createElement("li", null, "You will be able to click to flip a pair of cards up"), /*#__PURE__*/React.createElement("li", null, "If the cards are a match they will stay face up"), /*#__PURE__*/React.createElement("li", null, "If the cards aren't a match they will flip back down and you will earn a strike"), /*#__PURE__*/React.createElement("li", null, "The game ends when you either get 3 strikes or find every pair"), /*#__PURE__*/React.createElement("li", null, "If you win you can add your name to our database and compare your time to other players!")), /*#__PURE__*/React.createElement("button", {
      className: "button-nav",
      id: "replay-button",
      onClick: () => {
        setGameRoute(true);
      }
    }, "Play Now"));
  }
}