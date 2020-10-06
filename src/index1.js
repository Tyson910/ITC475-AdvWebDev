  //import React from 'react'
  //import ReactDOM from "react-dom"

  import Welcome from '/lib/Welcome.js'
  import Clock from '/lib/clock.js'
  import CitySelector from '/lib/citySelector.js';
  import PickActivity from '/lib/activitySelector.js';
  

  function App (){
  

  
      return(
        <div id='welcome'>

            <Clock />
            <Welcome />

        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('greetings'));
ReactDOM.render(<CitySelector />, document.getElementById('rsvpForm'));
