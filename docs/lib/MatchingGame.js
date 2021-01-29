import createDeck from './createDeck.js';
import Card from './Card.js';
import ShowStrikes from './ShowStrikes.js';
import Clock from './Timer.js';
import SaveScore from './SaveScore.js';
import Lost from './Lost.js';
import Start from './Start.js';
const {
  useState,
  useEffect
} = React;
export default function MatchingGame() {
  const [deck, setDeck] = useState(createDeck());
  const [pairs, setPairs] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [guess1, setGuess1] = useState('');
  const [guess2, setGuess2] = useState('');
  const [score, setScore] = useState('');
  const [gameStatus, setGameStatus] = useState('wait'); //shows users the deck for a limited amount of time

  useEffect(() => {
    var peek = setTimeout(() => flipAllCards(), 3000);
    return function cleanup() {
      clearTimeout(peek);
    };
  }, []); //shows all cards in deck

  function flipAllCards() {
    setDeck(deck.map(card => {
      card.isFaceDown = true;
      return card;
    })); // starts timer once cards are flipped

    setGameStatus('');
  } //check if selected cards are a match


  useEffect(() => {
    if (guess2) {
      cardsMatch();
      stopTimer();
    }
  }, [guess2]);

  function cardsMatch() {
    //resets selection and saves number of pairs if match
    if (guess1.cardValue === guess2.cardValue) {
      setGuess1('');
      setGuess2('');
      setPairs(pairs + 1);
    } else {
      setStrikes(strikes + 1); //lets user see wrong choices for a short time before flipping

      var showPicks = setTimeout(() => flipPicksDown(), 1400);
      return function cleanup() {
        clearTimeout(showPicks);
      };
    }
  } //flips 2 selected cards down in a deck


  function flipPicksDown() {
    setDeck(deck.map(card => {
      if (card.cardID === guess1.cardID || card.cardID === guess2.cardID) {
        card.isFaceDown = true;
      }

      return card;
    }));
    setGuess1('');
    setGuess2('');
  } //stops timer


  function stopTimer() {
    if (strikes >= 3) {
      setGameStatus('lost');
    } else if (pairs >= 3) {
      console.log(timer);
      setScore(timer);
      setGameStatus('won');
    }
  } //saves card info upon click 


  function saveClick(guessInput) {
    if (guessInput.isFaceDown) {
      if (!guess1) {
        setGuess1(guessInput);
        guessInput.isFaceDown = false;
      } else if (!guess2) {
        setGuess2(guessInput);
        guessInput.isFaceDown = false;
      }
    }
  }

  let deckDisplay = deck.map(item => {
    if (item.cardValue) {
      return /*#__PURE__*/React.createElement(Card, {
        key: item.cardID,
        cardValue: item.cardValue,
        isFaceDown: item.isFaceDown,
        onClick: () => {
          saveClick(item);
        }
      });
    } else {
      return null;
    }
  });
  let timer = Clock({
    stopTimer: gameStatus
  });
  let gameDisplay = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "widget-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "timer"
  }, /*#__PURE__*/React.createElement("div", null, "Timer"), timer), /*#__PURE__*/React.createElement(ShowStrikes, {
    strikes: strikes
  })), /*#__PURE__*/React.createElement("div", {
    className: "deck-container"
  }, deckDisplay), /*#__PURE__*/React.createElement("button", {
    className: "button-nav",
    id: "replay-button",
    onClick: () => {
      setGameStatus('home');
    }
  }, "Home Page"));

  if (strikes === 3) {
    gameDisplay = /*#__PURE__*/React.createElement(Lost, null);
  } else if (pairs === 4) {
    gameDisplay = /*#__PURE__*/React.createElement(SaveScore, {
      score: score
    });
  } else if (gameStatus === 'home') {
    gameDisplay = /*#__PURE__*/React.createElement(Start, null);
  }

  return gameDisplay;
}