import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import "../../../public/styles/login-register.css"

const RegisterFormKeys = {
    Email: 'email',
    UserName: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    // const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    //     [RegisterFormKeys.Email]: '',
    //     [RegisterFormKeys.Password]: '',
    //     [RegisterFormKeys.ConfirmPassword]: '',
    // });
    //----------------------------------------------------------------
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const { values, onChange, onSubmit } = useForm(
        () => {
            // Validate passwords before calling the submit handler
            if (values[RegisterFormKeys.Password] !== values[RegisterFormKeys.ConfirmPassword]) {
                setConfirmPasswordError("Passwords do not match");
            } else {
                setConfirmPasswordError('');
                registerSubmitHandler(values);
            }
        },
        {
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.UserName]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
        }
    );

    //----------------------------------------------------------------   

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="maria@email.com"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Email]}
                    />
                    <label htmlFor="username">Username:</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="someone"
                        onChange={onChange}
                        values={values[RegisterFormKeys.UserName]}
                    />

                    {passwordError && <p className="error">{passwordError}</p>}

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                    {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
                
            </form>
        </section>
    );
}
