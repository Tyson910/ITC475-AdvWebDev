class PickActivity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: ''
    };
  }

  componentDidUpdate(prevProps) {
    const maldivesData = ['Beach', 'Sailing', 'Muesems', 'Hiking', 'Boating'];
    const cancunData = ['Beaches', 'Boating', 'Parks and Recreation', 'Snorkeling'];
    const veniceData = ['Museums', 'Theatre', 'Parks and Recreation', 'City Tours'];
    const NZData = ['City Tours', 'Sports', 'Cycling', 'Museums', 'Boating'];

    if (this.props.city !== prevProps.city) {
      this.setState({
        city: this.props.city
      });

      if (this.props.city == 'Maldives') {
        this.setState({
          activities: maldivesData
        });
      } else if (this.props.city == 'Cancun') {
        this.setState({
          activities: cancunData
        });
      } else if (this.props.city == 'New Zealand') {
        this.setState({
          activities: NZData
        });
      } else if (this.props.city == 'Venice') {
        this.setState({
          activities: veniceData
        });
      }
    }
  }

  render() {
    const outingsArray = Object.values(this.state.activities);
    return /*#__PURE__*/React.createElement("div", null, outingsArray.map(item => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      key: item,
      id: item,
      name: item,
      value: item
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: item
    }, item), /*#__PURE__*/React.createElement("br", null))));
  }

}

export default PickActivity;