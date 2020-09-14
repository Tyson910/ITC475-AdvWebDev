import React from 'react'
import ReactDOM from 'react-dom'

'use strict';

/*const title = React.createElement("h1", {id:"bread"}, "woooohoooooo");

ReactDOM.render(title, document.getElementById('content'));
*/


function cat({name}){
    return (
        <h1>The cat's name is {name}</h1>;
}



ReactDOM.render( <cat name='Jungle' /> ),
    document.getElementById('root'));

