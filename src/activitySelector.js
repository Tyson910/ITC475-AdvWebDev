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


    render(){
        const outingsArray = Object.values(this.state.activities) ; 

        return (
            <div>
            
            {outingsArray.map(item =>(
                <form>
                <input type="checkbox" key={item} id={item} name={item} value={item}></input>
                <label htmlFor={item}>{item}</label>
                <br></br>
                </form>
                ))}

            </div>
        );

    }
}
export default PickActivity;