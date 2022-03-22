import React, { useState } from "react";

const useForm = (submitForm, validate) => {
  const [values, setValues] = useState({});

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const errorsGot = validate(values);
    if (Object.entries(errorsGot).length === 0) {
      submitForm(values);
    } else {
      setErrors(errorsGot);
    }
  };

  return { changeHandler, values, submitHandler, errors };
};

export default useForm;
