class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "welcome",
      id: "clock"
    }, " ", this.state.date.toLocaleTimeString(), " "));
  }

} //ReactDOM.render(<Clock/>, document.getElementById('greetings'));


export default Clock;