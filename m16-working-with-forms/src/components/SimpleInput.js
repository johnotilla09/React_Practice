import React from "react";

const SimpleInput = (props) => {
  const submitFormHandler = () => {
    
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChangw />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
