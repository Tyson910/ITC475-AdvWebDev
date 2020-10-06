  //import React from 'react'
  //import ReactDOM from "react-dom"

  import Welcome from '/lib/Welcome.js'
  import Clock from '/lib/clock.js'
  import listy from '/lib/listy.js';
  import activityData from '/lib/activityData.js';
  import CitySelector from '/lib/citySelector.js';
  import PickActivity from '/lib/activitySelector.js';
  

  function App (){
  

  
      return(
        <div>

          <div id='welcome'>
            
            <Welcome />
            <Clock />
          </div>

          <div> 
            <CitySelector />
          </div>
        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('greetings'))
