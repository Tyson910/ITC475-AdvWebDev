class ActivitySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
    console.log(this.state.value);
  }

  handleClick(event) {
    this.setState({
      value: event.target.value
    }); //console.log('current state is ' + this.state.value);
    //console.log('prev state is ' + this.prevState);
  }

  handleSubmit(event) {
    console.log('a value was submitted : ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit,
      value: this.state.value,
      onClick: this.handleClick
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "Maldives"
    }, "Maldives"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      id: "Maldives",
      value: "Maldives"
    }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("label", {
      htmlFor: "Mexico"
    }, "Mexico"), /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "cites",
      value: "Mexico"
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
    }), /*#__PURE__*/React.createElement("div", null, " ", this.state.value), /*#__PURE__*/React.createElement("input", {
      type: "submit",
      value: "submit"
    })));
  }

}

export default ActivitySelector;
/*  <select value={this.state.value} onChange={this.handleChange} >
      <option value="Mexico">Mexico</option>
      <option value='Maldives'>Maldives</option>
      <option value="NewZealand">New Zealand</option>
      <option value="Venice">Venice</option>
  </select> */