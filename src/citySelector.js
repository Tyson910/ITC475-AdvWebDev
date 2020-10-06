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
                <form onSubmit = {this.handleSubmit} value={this.state.value} onChange={this.handleChange}>

                <label htmlFor='Maldives'>Maldives</label>
                <input type='radio' name='cites' value='Maldives' />
                <br></br>

                <label htmlFor='Mexico'>Mexico</label>
                <input type='radio' name='cites' value='Cancun' />
                <br></br>

                <label htmlFor='Venice'>Venice</label>
                <input type='radio' name='cites'  value='Venice' />
                <br></br>

                <label htmlFor='New Zealand'>New Zealand</label>
                <input type='radio' name='cites' value='New Zealand' />
                <br></br>
                
                <input type="submit" value="submit" />
                </form>

                <div><PickActivity city = {this.state.value}/></div>
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

