import React from "react";

import "./form-input.styles.css";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-input-container">
      <label>{label}</label>
      <input onChange={handleChange} {...otherProps}></input>
    </div>
  );
};

export default FormInput;
