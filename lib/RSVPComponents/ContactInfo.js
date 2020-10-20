//import React from 'react'
function ContactInfo({
  fname,
  Lname,
  email,
  phone,
  onTextChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "contactInfo"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fname
  }, " First Name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "fname",
    value: fname,
    onChange: onTextChange,
    required: true
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: Lname
  }, " Last Name", /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "Lname",
    value: Lname,
    onChange: onTextChange,
    required: true
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: email
  }, " Email", /*#__PURE__*/React.createElement("input", {
    type: "email",
    name: "email",
    value: email,
    onChange: onTextChange,
    required: true
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
    htmlFor: phone
  }, " Phone", /*#__PURE__*/React.createElement("input", {
    type: "tel",
    placeholder: "111-111-1111",
    pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    name: "phoneNum",
    value: phone,
    onChange: onTextChange,
    required: true
  })));
}

export default ContactInfo;