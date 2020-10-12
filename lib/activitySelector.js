import activityList from '/lib/activityList.js';

class PickActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outings: '',
      city: '',
      chosenOutings: ''
    };
  }

  componentDidUpdate(prevProps) {
    //checks if radio button changed then updates activities
    if (this.props.city !== prevProps.city) {
      this.setState({
        city: this.props.city
      });
      this.setState({
        outings: activityList(this.props.city)
      });
    }
  } //<input type="submit" value="submit" />


  render() {
    //create iterable array then iterates through to create checkbox buttons 
    const outingsArray = Object.values(this.state.outings);
    const arrayForm = outingsArray.map(item => /*#__PURE__*/React.createElement("div", {
      key: item.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "Outing",
      value: item.activity
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: item.activity
    }, item.activity), /*#__PURE__*/React.createElement("br", null)));

    if (this.props.city.length == 0) {
      const display = /*#__PURE__*/React.createElement("div", null);
      return display;
    }

    if (this.props.city.length > 0) {
      const display = /*#__PURE__*/React.createElement("form", {
        className: "outingList"
      }, /*#__PURE__*/React.createElement("h3", null, "Activities"), arrayForm);
      return display;
    }

    return /*#__PURE__*/React.createElement("div", null, display);
  }

}

export default PickActivity;