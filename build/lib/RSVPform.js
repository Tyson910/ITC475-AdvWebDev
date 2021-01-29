import activityList from './activityList.js';
import ContactInfo from './RSVPComponents/ContactInfo.js';
import CityButtons from './RSVPComponents/CityButtons.js';
import OutingsButtons from './RSVPComponents/OutingsButtons.js';
import TripInfo from './RSVPComponents/TripInfo.js';
import MasterCheck from './RSVPComponents/MasterCheck.js';
import handleCheckbox from './handleCheckbox.js';
export default class RSVPform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //navigation
      page: 1,
      errorMessage: '',
      //locationdata
      city: '',
      outings: null,
      //trip info data
      kidCount: 0,
      adultCount: 1,
      checkin: '',
      checkout: '',
      //contact data
      fname: '',
      Lname: '',
      email: '',
      phoneNum: ''
    }; //provides initial state on reset

    this.initState = this.state;
    this.handleChange = this.handleChange.bind(this); //this.handleReset = this.handleReset.bind(this);

    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleChange(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState({
      [name]: value
    });

    if (event.target.type === 'radio') {
      const outingsOptions = activityList(value);
      const outingsArray = Object.values(outingsOptions);
      this.setState({
        outings: outingsArray
      });
      this.setState({
        advance: true
      });
    } else if (event.target.type === 'checkbox') {
      const outingsArray = this.state.outings;
      let arrayForm = outingsArray.find(item => item.activity === value); //verifies activities have been selected

      let filteredOutingsArray = outingsArray.filter(x => x.isPicked === true);

      if (name.includes('outing')) {
        //sets IsPicked to true in chosen objects
        if (event.target.checked) {
          let elementsIndex = this.state.outings.map(x => {
            if (x.id === arrayForm.id) {
              x.isPicked = true;
            }

            return x;
          });
          this.setState({
            outings: elementsIndex
          });
          this.setState({
            numOfOutings: filteredOutingsArray.length
          });
        } //sets IsPicked to false in unchosen objects
        else {
            let elementsIndex = this.state.outings.map(x => {
              if (x.id === arrayForm.id) {
                x.isPicked = false;
              }

              return x;
            });
            this.setState({
              outings: elementsIndex
            });
            this.setState({
              numOfOutings: filteredOutingsArray.length
            });
          }
      } else if (name === 'masterCheck') {
        //checks all options
        if (event.target.checked) {
          let elementsIndex = this.state.outings.map(x => {
            if (!x.isPicked) {
              x.isPicked = true;
            }

            return x;
          });
          this.setState({
            outings: elementsIndex
          });
          this.setState({
            numOfOutings: filteredOutingsArray.length
          });
        } else if (!event.target.checked) {
          //checks no options
          let elementsIndex = this.state.outings.map(x => {
            if (x.isPicked) {
              x.isPicked = false;
            }

            return x;
          });
          this.setState({
            outings: elementsIndex
          });
          this.setState({
            numOfOutings: filteredOutingsArray.length
          });
        }
      }
    }
  } //move foward one page


  handleNext(event) {
    switch (this.state.page) {
      case 1:
        if (this.state.city) {
          this.setState({
            page: this.state.page + 1
          });
          this.setState({
            errorMessage: ''
          });
          break;
        } else {
          this.setState({
            errorMessage: ' You must pick a city before advancing'
          });
          break;
        }

      case 2:
        if (this.state.numOfOutings) {
          this.setState({
            page: this.state.page + 1
          });
          this.setState({
            errorMessage: ''
          });
          break;
        } else {
          this.setState({
            errorMessage: ' You must pick an activity before advancing'
          });
          break;
        }

      case 3:
        if (this.state.checkin && this.state.checkout) {
          this.setState({
            page: this.state.page + 1
          });
          this.setState({
            errorMessage: ''
          });
          break;
        } else {
          this.setState({
            errorMessage: ' You must select BOTH check-out and check-in dates before advancing'
          });
          break;
        }

    }
  } //move back one page


  handlePrev(event) {
    this.setState({
      page: this.state.page - 1
    });
    this.setState({
      advance: true
    });
    this.setState({
      errorMessage: ''
    });
  }

  handleReset(event) {
    this.setState(this.initState);
  }

  render() {
    const cityArray = ['Maldives', 'Mexico', 'New Zealand', 'Venice'];
    const cityButtonDisplay = cityArray.map(givenCity => /*#__PURE__*/React.createElement(CityButtons, {
      key: givenCity,
      city: givenCity
    }));
    let arrayForm, contactForm, tripForm;

    if (this.state.city) {
      const outingsArray = this.state.outings;
      arrayForm = outingsArray.map(item => /*#__PURE__*/React.createElement(OutingsButtons, {
        isPicked: item.isPicked,
        key: item.id,
        activity: item.activity,
        onCheckboxChange: this.handleChange
      }));
    }

    contactForm = /*#__PURE__*/React.createElement(ContactInfo, {
      fname: this.state.fname,
      Lname: this.state.Lname,
      email: this.state.email,
      phone: this.state.phoneNum,
      onTextChange: this.handleChange
    });
    tripForm = /*#__PURE__*/React.createElement(TripInfo, {
      adultInput: this.state.adultCount,
      kidsInput: this.state.kidCount,
      onTripChange: this.handleChange,
      checkin: this.state.checkin,
      checkout: this.state.checkout
    }); //only displays the section of form being filled out

    let pg1display = {
      display: 'none'
    };
    let pg2display = {
      display: 'none'
    };
    let pg3display = {
      display: 'none'
    };
    let pg4display = {
      display: 'none'
    };

    switch (this.state.page) {
      case 1:
        pg1display = {
          display: 'block'
        };
        break;

      case 2:
        pg2display = {
          display: 'block'
        };
        break;

      case 3:
        pg3display = {
          display: 'block'
        };
        break;

      case 4:
        pg4display = {
          display: 'block'
        };
        break;
    } //defines contents of each 'page' of form


    let page1 = /*#__PURE__*/React.createElement("div", {
      className: "formPage page1",
      style: pg1display
    }, /*#__PURE__*/React.createElement("h3", null, "Please Choose a Destination"), cityButtonDisplay, /*#__PURE__*/React.createElement("div", {
      className: "errorMsg"
    }, this.state.errorMessage), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: "Next \u27E9",
      id: "nextButton",
      onClick: this.handleNext,
      className: "formnav-buttons"
    }));
    let page2 = /*#__PURE__*/React.createElement("div", {
      className: "formPage page2",
      style: pg2display
    }, /*#__PURE__*/React.createElement("h3", null, "Please select at least one activity in ", this.state.city), /*#__PURE__*/React.createElement(MasterCheck, {
      selected: this.handleChange
    }), arrayForm, /*#__PURE__*/React.createElement("div", {
      className: "errorMsg"
    }, this.state.errorMessage), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: " \u27E8 Go Back",
      id: "backButton",
      onClick: this.handlePrev,
      className: "formnav-buttons"
    }), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: "Next \u27E9",
      id: "nextButton",
      onClick: this.handleNext,
      className: "formnav-buttons"
    }));
    let page3 = /*#__PURE__*/React.createElement("div", {
      className: "formPage page3",
      style: pg3display
    }, /*#__PURE__*/React.createElement("h3", null, "Trip Information"), tripForm, /*#__PURE__*/React.createElement("div", {
      className: "errorMsg"
    }, this.state.errorMessage), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: "Go Back \u27E8",
      id: "backButton",
      onClick: this.handlePrev,
      className: "formnav-buttons"
    }), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: "Next \u27E9",
      id: "nextButton",
      onClick: this.handleNext,
      className: "formnav-buttons"
    }));
    let page4 = /*#__PURE__*/React.createElement("div", {
      className: "formPage page4",
      style: pg4display
    }, /*#__PURE__*/React.createElement("h3", null, "Please Enter Your Contact Information"), contactForm, /*#__PURE__*/React.createElement("div", {
      className: "errorMsg"
    }, this.state.errorMessage), /*#__PURE__*/React.createElement("input", {
      type: "button",
      value: " \u27E8 Go Back",
      id: "backButton",
      onClick: this.handlePrev,
      className: "formnav-buttons"
    }), /*#__PURE__*/React.createElement("input", {
      id: "submitBtn",
      type: "submit"
    }));
    return /*#__PURE__*/React.createElement("div", {
      onChange: this.handleChange,
      className: "locations"
    }, page1, page2, page3, page4);
  }

}