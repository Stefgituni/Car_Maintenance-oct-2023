import { useContext, useState } from "react";

import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

import styles from"./Register.Module.css" 

const RegisterFormKeys = {
    Email: 'email',
    UserName: 'username',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
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
        <section id={styles.registerPage} className="auth">
            <form id="register" onSubmit={onSubmit}>
                <div className={styles.container}>
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
                        placeholder="Someone"
                        onChange={onChange}
                        values={values[RegisterFormKeys.UserName]}
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]}
                    />

                    {confirmPasswordError && <p className={styles.error}>{confirmPasswordError}</p>}

                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />

                    <input className={styles.btnSubmit} type="submit" value="Register" />

                    <p className={styles.field}>
                        <span>If you already have profile click <a href="/login">here</a></span>
                    </p>
                </div>
                
            </form>
        </section>
    );
}
