  import Welcome from '/lib/Welcome.js';
  import Clock from '/lib/clock.js';
  import RSVPform from '/lib/RSVPform.js';

  function App (){
  

  
      return(
        <div id='welcome'>

            <Clock />
            <Welcome />

        </div>
      );
  }

ReactDOM.render(<App />, document.getElementById('greetings'));
ReactDOM.render(<RSVPform />, document.getElementById('rsvpForm'));
