

export default function CityButtons({city}){
    
    return  (

        <div className='cityInput'>

        <input type='radio'
        name='city'
        value={city}/>

        <label htmlFor={city}>
            {city}
        </label>

        </div>
    );
        

}
