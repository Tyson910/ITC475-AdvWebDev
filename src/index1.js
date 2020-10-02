  //import React from 'react'
  //import ReactDOM from "react-dom"
  import Welcome from '/lib/Welcome.js'
  import Clock from '/lib/clock.js'
  
  function App (){
      return(
        <div>
        <Clock />
        <Welcome />
        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('greetings'))
