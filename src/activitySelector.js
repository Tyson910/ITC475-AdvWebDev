class PickActivity extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activities: '',
        };
    }


    componentDidUpdate(prevProps){

        const maldivesData = ['Beach', 'Sailing', 'Muesems', 'Hiking', 'Boating']
        const cancunData = ['Beaches', 'Boating', 'Parks and Recreation', 'Snorkeling'];
        const veniceData = ['Museums', 'Theatre', 'Parks and Recreation', 'City Tours'];
        const NZData = ['City Tours', 'Sports', 'Cycling', 'Museums', 'Boating'];


        if (this.props.city !== prevProps.city){
            this.setState({city: this.props.city});

            if (this.props.city == 'Maldives'){
                this.setState({activities:maldivesData});
            }
            else if (this.props.city == 'Cancun'){
                this.setState({activities:cancunData});
            }
            else if (this.props.city == 'New Zealand'){
                this.setState({activities:NZData});
            }
            else if (this.props.city == 'Venice'){
                this.setState({activities:veniceData});
            }
            
    }
    
    }

    //<input type="submit" value="submit" />
    
    render(){
        const outingsArray = Object.values(this.state.activities) ; 

        return (
            <form className='outingList'>
            <h3>Activities</h3>
            
            {outingsArray.map(item =>(
                <div>
                <input type="checkbox" key={item} id={item} name={item} value={item}></input>
                <label htmlFor={item}>{item}</label>
                <br></br>
                </div>
                ))}
                
 
                

            </form>
        );

    }
}
export default PickActivity;