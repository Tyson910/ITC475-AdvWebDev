import PickActivity from '/lib/activitySelector.js';

class CitySelector extends React.Component {
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
    console.log('a value was submitted : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit,
      value: this.state.value,
      onChange: this.handleChange
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "Maldives"
    }, "Maldives"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      value: "Maldives"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "Mexico"
    }, "Mexico"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      value: "Cancun"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "Venice"
    }, "Venice"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      value: "Venice"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "New Zealand"
    }, "New Zealand"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      value: "New Zealand"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(PickActivity, {
      city: this.state.value
    })));
  }

}

export default CitySelector;
/*  <select value={this.state.value} onChange={this.handleChange} >
      <option value="Mexico">Mexico</option>
      <option value='Maldives'>Maldives</option>
      <option value="NewZealand">New Zealand</option>
      <option value="Venice">Venice</option>
  </select> */