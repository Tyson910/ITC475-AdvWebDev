//import React from 'react'
import activityList from './activityList.js';
import ContactInfo from './RSVPComponents/ContactInfo.js';
import CityButtons from './RSVPComponents/CityButtons.js';
import OutingsButtons from './RSVPComponents/OutingsButtons.js';
import TripInfo from './RSVPComponents/TripInfo.js';


export default class RSVPform extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            //navigation
            page: 1,
            advance: false,
            //locationdata
            city: '',
            outings: null,
            //contact data
            fname: '',
            fnameError: '',
            Lname:'',
            LnameError:'',
            email:'',
            emailError:'',
            phoneNum:'',
            phoneNumError:'',
            //trip info data
            kidCount:0,
            adultCount:1,
            checkin:'',
            checkout:'',

        };

        //provides initial state on reset
        this.initState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlePrev = this.handlePrev.bind(this);
    }


    handleChange(event){

        this.setState({[event.target.name]:event.target.value});

        
        if( event.target.type ==='radio'){
        const outingsOptions = activityList(event.target.value);
        const outingsArray = Object.values(outingsOptions) ;
        this.setState({outings: outingsArray});
        }

        if(event.target.type ==='checkbox'){
            const outingsArray = this.state.outings; 

            let arrayForm = outingsArray.find(item =>( 
                item.activity === event.target.value  
            ));

            //verifies activities have been selected
            let filteredArray = outingsArray.filter(x =>(
                x.isPicked === true));
                
            let numOfOutings = filteredArray.length;
            
            //sets IsPicked to true in chosen objects
            if(event.target.checked){
                let elementsIndex = this.state.outings.map(x =>{
                    if(x.id === arrayForm.id){
                        x.isPicked = true;
                    }
                    return x });
                this.setState({outings: elementsIndex});
                this.setState({advance:true});

            }

            //sets IsPicked to false in unchosen objects
            else{
                let elementsIndex = this.state.outings.map(x =>{
                    if(x.id === arrayForm.id){
                        x.isPicked = false;
                    }
                    return x })
                this.setState({outings: elementsIndex});

                if(!numOfOutings){
                this.setState({advance:false});
            }
            }
        }
    }

    handleNext(event){
        this.setState({page: this.state.page+1})
    }

    handlePrev(event){
        this.setState({page: this.state.page-1})
    }

    handleSubmit(event) {
        // console.log('a value was submitted : ' + Object.values(this.state));
        //event.preventDefault();
    }

    handleReset(event) {
        this.setState(this.initState);
    }
    
    render(){
        const cityArray = ['Maldives', 'Mexico','New Zealand', 'Venice' ];

        const cityButtonDisplay = cityArray.map(givenCity => <CityButtons key={givenCity} city={givenCity}/>);
   
        let arrayForm;
        let contactForm;
        let tripForm;
        let currentDisplay;

        const proceed = this.state.proceed;
        let pageNum = this.state.page;

        if(this.state.city){
            const outingsArray = this.state.outings; 
            
            arrayForm = outingsArray.map(item =>(
            <OutingsButtons 
            isPicked={item.isPicked} 
            key={item.id}
            activity={item.activity} 
            onCheckboxChange={this.handleChange}/>
            ));
        }

        contactForm = <ContactInfo 
            fname={this.state.fname} 
            Lname={this.state.Lname}
            email ={this.state.email} 
            phone={this.state.phoneNum}  
            onTextChange={this.handleChange} />;
    
        tripForm = <TripInfo 
            adultInput={this.state.adultCount} 
            kidsInput={this.state.kidCount} 
            onTripChange={this.handleChange}
            checkin={this.state.checkin}
            checkout={this.state.checkout}/>;

        switch(pageNum){
            case 1:
                currentDisplay= <React.Fragment>
                <h3>Please Choose a Destination</h3>
                {cityButtonDisplay}

                <input type='button' value='Fuck You Next' id='you'
                onClick={this.handleNext} className='formnav-buttons'/>
                </React.Fragment>
                break;
            case 2:
                currentDisplay= <React.Fragment>
                    <h3>Activities</h3>
                    {arrayForm}

                    <input type='button' value='Fuck Me Back' id='me'
                    onClick={this.handlePrev} className='formnav-buttons'/>

                    <input type='button' value='Fuck You Next' id='you'
                    onClick={this.handleNext} className='formnav-buttons'/>

                </React.Fragment>
                break;
            case 3:
                currentDisplay= contactForm;
                break;
            case 4:
                currentDisplay= tripForm;
                break;
        }
        

        return(

            <div >

                <form onSubmit = {this.handleSubmit} onReset= {this.handleReset}
                  onChange={this.handleChange} className='locations'>

                {currentDisplay}
                
                </form>
            </div>
        );  
}
} 

/*
                <input type='button' value='Fuck Me' id='me'
                onClick={this.handlePrev} className='formnav-buttons'/>

                <input type='button' value='Fuck You' id='you'
                onClick={this.handleNext} className='formnav-buttons'/>

                {arrayForm}

                {contactForm}

                {tripForm}
                                
                <input type='reset' />
                <input type='submit' />
                */