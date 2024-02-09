import { useNavigate } from "react-router-dom";
import styles from "./css/signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    navigate("/account-settings");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.signupText}>
        Create your <br /> PopX account
      </h2>

      <form className={styles.form}>
        <div className={styles.formUp}>
          <fieldset className={styles.fieldset}>
            <legend htmlFor="fullName" className={styles.label}>
              Full Name<span className={styles.required}>*</span>
            </legend>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              className={styles.input}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend htmlFor="phone" className={styles.label}>
              Phone number<span className={styles.required}>*</span>
            </legend>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              className={styles.input}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend htmlFor="email" className={styles.label}>
              Email Address<span className={styles.required}>*</span>
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
              Password<span className={styles.required}>*</span>
            </legend>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              className={styles.input}
            />
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend htmlFor="company" className={styles.label}>
              Company name<span className={styles.required}>*</span>
            </legend>
            <input
              type="password"
              name="company"
              placeholder="Enter Company Name"
              className={styles.input}
            />
          </fieldset>

          <div className={styles.radioDiv}>
            <label className={styles.agency}>
              Are you an Agency?<span className={styles.required}>*</span>
            </label>
            <div className={styles.radioInputs}>
              <div className={styles.radioGrp}>
                <input
                  type="radio"
                  name="agency"
                  id="agency"
                  value="yes"
                  checked
                  className={styles.radio}
                />
                <label htmlFor="yes" className={styles.radioLabel}>
                  Yes
                </label>
              </div>
              <div className={styles.radioGrp}>
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  id="agency"
                  className={styles.radio}
                />
                <label htmlFor="no" className={styles.radioLabel}>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <input
          type="submit"
          value="Create Account"
          onClick={(e) => handleSignUp(e)}
          className={styles.signupBtn}
        />
      </form>
    </div>
  );
}

export default Signup;
