import { useNavigate } from "react-router-dom";
import styles from "./css/login.module.css";

function Login() {
    const navigate =useNavigate()
    const handleLogin= (e) => {
        e.preventDefault()
        navigate("/account-settings")
    }

  return (
    <div className={styles.container}>
      <h2 className={styles.loginText}>
        Signin to your <br /> PopX account
      </h2>
      <p className={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <form className={styles.form}>
        <fieldset className={styles.fieldset}>
          <legend htmlFor="email" className={styles.label}>
            Email Address
          </legend>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className={styles.input}
          />
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend htmlFor="password" className={styles.label}>
            Password
          </legend>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className={styles.input}
          />
        </fieldset>
        <input type="submit" value="Login" onClick={(e) => handleLogin(e)} className={styles.loginBtn} />
      </form>
    </div>
  );
}

export default Login;
