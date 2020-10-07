import activityList from '/lib/activityList.js'
class PickActivity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            outings: '',
            chosenOutings: ''
        };
    }


    componentDidUpdate(prevProps){
        
        if (this.props.city !== prevProps.city){

            this.setState({city: this.props.city});

            this.setState({outings: activityList(this.props.city)});
            
    }
    
    }

    //<input type="submit" value="submit" />

    render(){
        const outingsArray = Object.values(this.state.outings) ; 
        const showArray = outingsArray.map(item =>(
            <div key={item.id} >
            <input type="checkbox" name='Outing' value={item.activity}></input>
            <label htmlFor={item.activity}>{item.activity}</label>
            <br></br>
            </div>
            ));

        return (
        
            <form className='outingList'>

            <h3>Activty</h3>

            <div>{showArray}</div>    

            </form>
        );

    }
}
export default PickActivity;