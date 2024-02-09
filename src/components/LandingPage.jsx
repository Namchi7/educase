import { Link } from "react-router-dom";
import styles from "./css/landingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.welcomeText}>Welcome to PopX</h2>
      <p className={styles.loremText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <Link to="/signup" className={`${styles.createAccount} ${styles.lpBtn}`}>
        Create Account
      </Link>
      <Link to="/login" className={`${styles.login} ${styles.lpBtn}`}>
        Already Registered? Login
      </Link>
    </div>
  );
}

export default LandingPage;
