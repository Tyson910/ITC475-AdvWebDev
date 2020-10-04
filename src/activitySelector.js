class ActivitySelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick(event){
        this.setState({value: event.target.value})
  

    handleSubmit(event) {
        console.log('a value was submitted : ' + this.state.value)
        event.preventDefault();
    }


    
    render(){
        return(
            <div >
                <form onSubmit = {this.handleSubmit} value={this.state.value} onClick={this.handleClick}>

                <label htmlFor='Maldives'>Maldives</label>
                <input type='radio' name='cites' id='Maldives' value='Maldives' />
                <br></br>

                <label htmlFor='Mexico'>Mexico</label>
                <input type='radio' name='cites' value='Mexico' />
                <br></br>

                <label htmlFor='Venice'>Venice</label>
                <input type='radio' name='cites'  value='Venice' />
                <br></br>

                <label htmlFor='New Zealand'>New Zealand</label>
                <input type='radio' name='cites' value='New Zealand' />
                
                <input type="submit" value="submit" />
                </form>
            </div>
        );
    
}

} 


export default ActivitySelector;

              /*  <select value={this.state.value} onChange={this.handleChange} >
                    <option value="Mexico">Mexico</option>
                    <option value='Maldives'>Maldives</option>
                    <option value="NewZealand">New Zealand</option>
                    <option value="Venice">Venice</option>
                </select> */

