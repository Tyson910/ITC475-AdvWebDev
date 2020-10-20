//import React from 'react';


export default function TripInfo({adultInput, kidsInput,onTripChange, checkout, checkin}){

const numArray = [0,1,2,3,4,5,6,7,8,9]
const adultArray = numArray.filter( x => x>0) 

let kidsDropdown = numArray.map( x => (
    <option key={x} value={x}>  {x}  </option>
)) 

let adultDropdown = adultArray.map( x =>(
    <option key={x} value={x} >  {x}  </option>
)) 
    
    return(
<div className='trip-info'>
    <label htmlFor='kidCount'> How many children are traveling?
    <select name='kidCount' value={kidsInput} onChange={onTripChange} >
        {kidsDropdown}
    </select> 
    </label>
    <br></br>

    <label htmlFor='kidCount'> How many adults are traveling?
    <select name='adultCount' value={adultInput} onChange={onTripChange} >
        {adultDropdown}
    </select>
    </label>
    <br></br>

    <label htmlFor='checkin'>Check In Date 
        <input type='date'
        name='checkin'
        value={checkin}
        onChange={onTripChange}
        required />
    </label>
    <br></br>
    
    <label htmlFor='checkout'>Check Out Date
        <input type='date'
        name='checkout'
        value={checkout}
        onChange={onTripChange}
        required />

    </label>

    
</div>
    )
}