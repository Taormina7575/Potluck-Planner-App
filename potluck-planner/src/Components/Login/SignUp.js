import {React, useState, useEffect} from "react";
import "./SignUp.css";
import * as yup from "yup";
import schema from '../../validation/SignUpSchema'

const initialFormValues = {
    username: '',
    password: '',
}

const initialFormErrors = {
    username: '',
    password: '',
}

const initialDisabled = true;


export default function SignUp() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    
    function change(evt) {
        const {name, value} = evt.target;
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })

            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid);
        });
      }, [formValues]);

      const submit = (evt) => {
        evt.preventDefault();
        const newUser = {
          username: formValues.username.trim(),
          password: formValues.password.trim()
        };
        setFormValues(initialFormValues);
      };

  return (
    <div>
      <div className="formContainer">
        <form className="loginForm" onSubmit={submit}>
          <h1 className='signUpHead'>Sign Up</h1>
          <label className="loginLabel">
            Username
            <input
              type="text"
              name="username"
              value={formValues.username}
              placeholder="Enter Username"
              className="loginInput"
              onChange={change}
            ></input>
          </label>
          <label className="loginLabel">
            Password
            <input
              type="text"
              name="password"
              value={formValues.password}
              placeholder="Enter Password"
              className="loginInput"
              onChange={change}
            ></input>
          </label>
          <button className="loginButton" disabled={disabled}>Login</button>
          <div>
                  {formErrors.username}
                  {formErrors.password}
          </div>
        </form>
      </div>
    </div>
  );
}
