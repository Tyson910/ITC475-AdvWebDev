
function ContactInfo({fname,Lname,email,phone, onTextChange}){
    
    return  (

        <div className='contactInfo'>

        <label htmlFor={fname}> First Name
        <input 
         type='text'
        name='fname'
        value={fname}
        onChange={onTextChange}
        required />
        </label>
       
        <br></br>
        <label htmlFor={Lname}> Last Name
        <input type='text'
        name='Lname'
        value={Lname}
        onChange={onTextChange}
        required 
        />
        </label>

        <br></br>
        <label htmlFor={email}> Email
        <input type='email'
        name='email'
        value={email}
        onChange={onTextChange} 
        required
        />
        
        </label>

        <br></br>

        <label htmlFor={phone}> Phone
        <input type='tel'
        placeholder='111-111-1111'
        pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
        name='phoneNum'
        value={phone}
        onChange={onTextChange} 
        required
        />
        </label>

        </div>
    );
        

}
export default ContactInfo;

