//import React from 'react';
export default function TripInfo({
  adultInput,
  kidsInput,
  onTripChange,
  checkout,
  checkin
}) {
  const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const adultArray = numArray.filter(x => x > 0);
  let kidsDropdown = numArray.map(x => /*#__PURE__*/React.createElement("option", {
    key: x,
    value: x
  }, "  ", x, "  "));
  let adultDropdown = adultArray.map(x => /*#__PURE__*/React.createElement("option", {
    key: x,
    value: x
  }, "  ", x, "  "));
  return /*#__PURE__*/React.createElement("div", {
    className: "trip-info"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "adultCount"
  }, " How many adults are traveling?", /*#__PURE__*/React.createElement("select", {
    name: "adultCount",
    value: adultInput,
    onChange: onTripChange
  }, adultDropdown)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "kidCount"
  }, " How many children are traveling?", /*#__PURE__*/React.createElement("select", {
    name: "kidCount",
    value: kidsInput,
    onChange: onTripChange
  }, kidsDropdown)), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkin"
  }, "Check In Date", /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "checkin",
    value: checkin,
    onChange: onTripChange,
    max: checkout
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: "checkout"
  }, "Check Out Date", /*#__PURE__*/React.createElement("input", {
    type: "date",
    name: "checkout",
    value: checkout,
    onChange: onTripChange,
    min: checkin
  })));
}