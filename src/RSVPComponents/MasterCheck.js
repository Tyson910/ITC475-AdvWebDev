export default function MasterCheck({isChecked, selected}){

    return(
        <div className='form-check' id='master-check'>
            <label>
            <input type='checkbox'
                name='masterCheck'
                checked={isChecked}
                onChange={selected}
                value='3' />
                All Activities
            </label>

        </div>

    )
}