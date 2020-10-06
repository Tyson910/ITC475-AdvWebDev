import activityData from '/lib/activityData.js'

function Listy(props){

    /*const bread =   activityData(city);
    */

    const breadItems = props.activityList.map((shit) => 
      <li>{shit}</li>
    ); 

    if (props.activityList === ''){
        return ''
    }
    else if (props.activityList ==''){
        return' '
    }
    else{
         return breadItems;
}
}

export default Listy;