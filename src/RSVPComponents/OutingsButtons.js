//import React from 'react';

const OutingsButtons = ({ activity, isPicked, onCheckboxChange}) => (
  <div className="form-check">
    <label>
      <input
        type="checkbox"
        name='outing[]'
        checked={isPicked}
        value={activity}
        onChange={onCheckboxChange}
       
        className="form-check-input"
      />
      {activity}
    </label>
  </div>
);

export default OutingsButtons;


