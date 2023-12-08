import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../contexts/authContext";
// import "../../../public/styles/Login.css"
// import "../../../public/styles/login-register.css"
import styles from"./Login.Module.css" 
const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });
    return (
        // <section id="login-page" className="auth">
        <section id={styles.loginPage} className="auth">
            <form id="login" onSubmit={onSubmit}>

                <div className={styles.container}>
                    {/* <div className={styles.brandLogo}></div> */}
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LoginFormKyes.Email}
                        placeholder="Someone@abv.bg"
                        onChange={onChange}
                        value={values[LoginFormKyes.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LoginFormKyes.Password}
                        onChange={onChange}
                        value={values[LoginFormKyes.Password]}
                    />
                    <input type="submit" className={styles.btnSubmit} value="Login" />
                    <p className={styles.field}>
                        <span>If you don&#39;t have profile click <a href="/register">here</a></span>
                    </p>
                </div>
            </form>

           
        </section>
    );
}
