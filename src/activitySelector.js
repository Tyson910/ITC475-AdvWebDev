class activitySelector extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value:event.target.value});
    }

    handleSubmit(event) {
        console.log('a value was submitted :' + this.state.value)
        event.preventDefault();
    }


    
    render(){
        return(
            <div >
                <form onSubmit = {this.handleSubmit}>
                <label>
                    Choose Your Vacation Destination
                <select value={this.state.value} onChange={this.handleChange} >
                    <option value="Mexico">Mexico</option>
                    <option value={this.state.value}>Maldives</option>
                    <option value="NewZealand">New Zealand</option>
                    <option value="Venice">Venice</option>
                </select>
                </label>
                <input type="submit" value="submit" />
                </form>
            </div>
        );
    
}

}

export default activitySelector;