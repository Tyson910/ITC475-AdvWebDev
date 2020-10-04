

//ensures minutes will always have 2 digits
  function addZero (minutes){
    if (minutes < 10){
       return '0' + minutes.toString();
    }
    return minutes;
  }

  //displays greeting based on time
  function showGreeting(time){
    if (time < 1200){
      return 'Good Morning';
    }
    else if (time < 1701){
      return 'Good Afternoon';
    }
    else{
      return 'Good Evening' ;
    }
  }

  //shows image based on time
  function sunOrMoon(militaryTime){  

    if ( militaryTime > 600 && militaryTime < 1801){
      return 'sun.png';}

    else{
      return 'moonpic.png';}
    }
  

//Welcome component     
function Welcome(){

  const today = new Date();
  let currentHour = today.getHours();
  let currentMin =  addZero( today.getMinutes() ) ;
  let currentTime = Number(currentHour.toString() + currentMin.toString());

  
    return (
    <div>
      <img className='welcome' id='sunOrMoon' src = {sunOrMoon(currentTime)} /> 
      <div className='welcome' id='showGreeting'> {showGreeting(currentTime)}</div>
    </div>
    ); 
}

export default Welcome;



