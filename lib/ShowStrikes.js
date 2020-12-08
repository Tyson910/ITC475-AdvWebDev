//import React from 'react';
export default function ShowStrikes({
  strikes
}) {
  let strikeArray = [];

  for (let i = 0; i < strikes; i++) {
    strikeArray.push({
      strikeIndex: 'strike' + i.toString(),
      strikeEmoji: ' ❌ '
    });
  }

  let strikeDisplay = strikeArray.map(item => /*#__PURE__*/React.createElement("div", {
    className: "strike",
    key: item.strikeIndex,
    id: item.strikeIndex
  }, item.strikeEmoji));
  return /*#__PURE__*/React.createElement("div", {
    className: "strike-container"
  }, /*#__PURE__*/React.createElement("div", {
    id: "strikes-title"
  }, "Strikes"), strikeDisplay);
}