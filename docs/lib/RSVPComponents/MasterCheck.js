export default function MasterCheck({
  isChecked,
  selected
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "form-check",
    id: "master-check"
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    name: "masterCheck",
    checked: isChecked,
    onChange: selected,
    value: "3"
  }), "All Activities"));
}