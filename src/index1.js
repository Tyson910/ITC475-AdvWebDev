  //import React from 'react'
  //import ReactDOM from "react-dom"
  import Welcome from '/lib/Welcome.js'
  import Clock from '/lib/clock.js'
  import ActivitySelector from '/lib/activitySelector.js'
  
  function App (){
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
