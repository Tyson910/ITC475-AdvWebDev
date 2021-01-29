export default function Card({
  cardValue,
  isFaceDown,
  onClick
}) {
  let cardDisplay;
  let cardFile = './DECKGIF/' + cardValue + '.gif';
  let cardAlt;

  switch (cardValue.slice(-1)) {
    case 'h':
      cardAlt = parseInt(cardValue) + ' of hearts';
      break;

    case 's':
      cardAlt = parseInt(cardValue) + ' of spades';
      break;

    case 'd':
      cardAlt = parseInt(cardValue) + ' of diamonds';
      break;

    case 'c':
      cardAlt = parseInt(cardValue) + ' of clubs';
      break;

    default:
      return null;
  }

  if (isFaceDown) {
    cardDisplay = /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      className: "card"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./DECKGIF/b.gif",
      alt: "back of playing card"
    }));
  } else {
    cardDisplay = /*#__PURE__*/React.createElement("button", {
      className: "card",
      onClick: onClick,
      value: cardValue
    }, /*#__PURE__*/React.createElement("img", {
      src: cardFile,
      alt: cardAlt
    }));
  }

  return cardDisplay;
}