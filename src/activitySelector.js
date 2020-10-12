import activityList from '/lib/activityList.js'
class PickActivity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            outings: '',
            city:'',
            chosenOutings: ''
        };
    }


    componentDidUpdate(prevProps){
        
        //checks if radio button changed then updates activities

        if (this.props.city !== prevProps.city){

            this.setState({city: this.props.city});

            this.setState({outings: activityList(this.props.city)});
            
    }
    
    }

    //<input type="submit" value="submit" />

    render(){
        //create iterable array then iterates through to create checkbox buttons 
        const outingsArray = Object.values(this.state.outings) ; 
        const arrayForm = outingsArray.map(item =>(
            <div key={item.id} >
            <input type="checkbox" name='Outing' value={item.activity}></input>
            <label htmlFor={item.activity}>{item.activity}</label>
            <br></br>
            </div>
            ));

        if (this.props.city.length == 0){
            const display = <div></div>
            return display;
        }
        
        if (this.props.city.length > 0){
       const display = <form className='outingList'>
       <h3>Activities</h3>
       {arrayForm}
       </form>
       return display;
        }

        return (
            
            <div>
            {display}
            
            
            </div>
    
        );

    }
}
export default PickActivity;