import activityList from '/lib/activityList.js';

class PickActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outings: '',
      chosenOutings: ''
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.city !== prevProps.city) {
      this.setState({
        city: this.props.city
      });
      this.setState({
        outings: activityList(this.props.city)
      });
      const listy = activityList(this.props.city);
      const listyArray = Object.values(listy);
      console.log(listyArray.map(item => item.activity));
    }
  } //<input type="submit" value="submit" />


  render() {
    const outingsArray = Object.values(this.state.outings);
    const showArray = outingsArray.map(item => /*#__PURE__*/React.createElement("div", {
      key: item.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      name: "Outing",
      value: item.activity
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: item.activity
    }, item.activity), /*#__PURE__*/React.createElement("br", null)));
    return /*#__PURE__*/React.createElement("form", {
      className: "outingList"
    }, /*#__PURE__*/React.createElement("h3", null, "Activty"), /*#__PURE__*/React.createElement("div", null, showArray));
  }

}

export default PickActivity;