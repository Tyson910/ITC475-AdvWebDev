//import React from 'react'
import activityList from './activityList.js'
import ContactInfo from './RSVPComponents/ContactInfo.js'
import CityButtons from './RSVPComponents/CityButtons.js'
import OutingsButtons from './RSVPComponents/OutingsButtons.js'
import TripInfo from './RSVPComponents/TripInfo.js'


export default class RSVPform extends React.Component{

    
    constructor(props){
        super(props);
        this.state = {
            page: 1,
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
        this.initState = this.state

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }


    handleChange(event){

        this.setState({[event.target.name]:event.target.value})

        
        if( event.target.type ==='radio'){
        const outingsOptions = activityList(event.target.value);
        const outingsArray = Object.values(outingsOptions) ;
        this.setState({outings: outingsArray})
        }

        if(event.target.type ==='checkbox'){
            const outingsArray = this.state.outings; 

            let arrayForm = outingsArray.find(item =>( 
                item.activity === event.target.value  
            ))
            
            //sets IsPicked to true in chosen objects
            if(event.target.checked){
                let elementsIndex = this.state.outings.map(x =>{
                    if(x.id === arrayForm.id){
                        x.isPicked = true
                    }
                    return x })
                this.setState({outings: elementsIndex})
            }

            ////sets IsPicked to false in unchosen objects
            else{
                let elementsIndex = this.state.outings.map(x =>{
                    if(x.id === arrayForm.id){
                        x.isPicked = false
                    }
                    return x })
                this.setState({outings: elementsIndex})
            }
        }
        }
    /*
    handleNext(event){
        let canProceed =false
        if(event is clicked and on page one){
            const outingsArray = this.state.outings; 

            let checkForActivities = outingsArray.includes(x =>( 
                x.isPicked === true 
            ))
            
            if(arrayForm){
                canProceed=true
            }
        }
    }
*/
    handleSubmit(event) {
        console.log('a value was submitted : ' + Object.values(this.state))
        event.preventDefault();
    }

    handleReset(event) {
        this.setState(this.initState)
    }
    
    render(){
        const cityArray = ['Maldives', 'Mexico','New Zealand', 'Venice' ]

        const cityButtonDisplay = cityArray.map(givenCity => <CityButtons key={givenCity} city={givenCity}/>);
   
        let arrayForm;

        if(this.state.city){
            const outingsArray = this.state.outings; 
            
            arrayForm = outingsArray.map(item =>( <OutingsButtons 
            isPicked={item.isPicked} 
            key={item.id}
            activity={item.activity} 
            onCheckboxChange={this.handleChange}/>
                ));
        }

        let contactForm = <ContactInfo 
            fname={this.state.fname} 
            Lname={this.state.Lname}
            email ={this.state.email} 
            phone={this.state.phoneNum}  
            onTextChange={this.handleChange} />
    
        let tripForm = <TripInfo 
            adultInput={this.state.adultCount} 
            kidsInput={this.state.kidCount} 
            onTripChange={this.handleChange}
            checkin={this.state.checkin}
            checkout={this.state.checkout}/>
       
        return(

            <div >

                <form onSubmit = {this.handleSubmit} onReset= {this.handleReset}
                  onChange={this.handleChange} className='locations'>
                <h3>Locations</h3>
                
                {cityButtonDisplay}

                {arrayForm}

                {contactForm}

                {tripForm}

                <input type='reset' />
                <input type='submit' />
                </form>
            </div>
        );  
}
} 
