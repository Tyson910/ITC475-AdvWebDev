  import React from 'react'
  import ReactDOM from "react-dom"
  import Welcome from '/Welcome.js'
  function App(){

    return ( 
      <div>
        <Welcome />
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('greetings'));
//setInterval(<Welcome />, 1000);