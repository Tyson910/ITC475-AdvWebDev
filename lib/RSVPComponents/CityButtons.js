//import React from 'react'
export default function CityButtons({
  city
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cityInput"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: "city",
    value: city
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: city
  }, city));
}