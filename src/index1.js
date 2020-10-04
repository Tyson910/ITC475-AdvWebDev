  //import React from 'react'
  //import ReactDOM from "react-dom"
  import Welcome from '/lib/Welcome.js'
  import Clock from '/lib/clock.js'
  import activityData from '/lib/activityData.js';
  import ActivitySelector from '/lib/activitySelector.js';
  

  function App (){
  

      const bread =   activityData('Maldives');
      const breadItems = bread.map((shit) => 
        <li>{shit}</li>
      );
  
      return(
        <div>

          <div id='welcome'>
            <Clock />
            <Welcome />
            
          </div>

          <div>
            <ActivitySelector />
      
          </div>
        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('greetings'))
