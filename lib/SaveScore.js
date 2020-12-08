//import React from 'react';
export default function SaveScore({
  score
}) {
  return /*#__PURE__*/React.createElement("form", {
    formAction: "action.php",
    method: "POST"
  }, /*#__PURE__*/React.createElement("div", null, "Congrats you finished in"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "scoreInput",
    name: "score",
    readOnly: true,
    value: score
  }), /*#__PURE__*/React.createElement("div", null, "Please enter a username to save your score"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "usernameInput",
    name: "username",
    required: true,
    placeholder: "Username"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "submit",
    id: "submmit",
    name: "submit",
    className: "button-nav"
  })));
}