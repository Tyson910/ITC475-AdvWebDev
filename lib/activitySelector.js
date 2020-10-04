class activitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('a value was submitted :' + this.state.value);
    event.preventDefault();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("label", null, "Choose Your Vacation Destination", /*#__PURE__*/React.createElement("select", {
      value: this.state.value,
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("option", {
      value: "Mexico"
    }, "Mexico"), /*#__PURE__*/React.createElement("option", {
      value: this.state.value
    }, "Maldives"), /*#__PURE__*/React.createElement("option", {
      value: "NewZealand"
    }, "New Zealand"), /*#__PURE__*/React.createElement("option", {
      value: "Venice"
    }, "Venice"))), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    })));
  }

}

export default activitySelector;