import PickActivity from '/lib/activitySelector.js'

class CitySelector extends React.Component{

    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }
  

    handleSubmit(event) {
        console.log('a value was submitted : ' + this.state.value)
        event.preventDefault();
    }


    
    render(){
        return(
            <div >

                <form onSubmit = {this.handleSubmit} value={this.state.value} onChange={this.handleChange} className='locations'>
                <h3>Locations</h3>
                <input type='radio' name='cites' value='Maldives' />
                <label htmlFor='Maldives'>Maldives</label>
                <br></br>

                <input type='radio' name='cites' value='Cancun' />
                <label htmlFor='Mexico'>Mexico</label>
                <br></br>
           
                <input type='radio' name='cites'  value='Venice' />
                <label htmlFor='Venice'>Venice</label>
                <br></br>
              
                <input type='radio' name='cites' value='New Zealand' />
                <label htmlFor='New Zealand'>New Zealand</label>
                <br></br>
    
                </form>

                <PickActivity city = {this.state.value} />
            </div>
        );
    
}

} 


export default CitySelector;

              /*  <select value={this.state.value} onChange={this.handleChange} >
                    <option value="Mexico">Mexico</option>
                    <option value='Maldives'>Maldives</option>
                    <option value="NewZealand">New Zealand</option>
                    <option value="Venice">Venice</option>
                </select> */

