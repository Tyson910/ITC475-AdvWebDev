//import React from 'react';
const OutingsButtons = ({
  activity,
  isPicked,
  onCheckboxChange
}) => /*#__PURE__*/React.createElement("div", {
  className: "form-check"
}, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
  type: "checkbox",
  name: "outing[]",
  checked: isPicked,
  value: activity,
  onChange: onCheckboxChange,
  className: "form-check-input"
}), activity));

export default OutingsButtons;