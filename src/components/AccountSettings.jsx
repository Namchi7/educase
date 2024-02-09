import styles from "./css/accountSettings.module.css";

import dp from "../assets/dp.png";
import camera from "../assets/camera.svg";

function AccountSettings() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Account Settings</div>
      <div className={styles.content}>
        <div className={styles.basicInfoDiv}>
          <div className={styles.picturesDiv}>
            <div className={styles.dpDiv}>
              <img src={dp} alt="User's Name" className={styles.dp} />
            </div>
            <div className={styles.cameraDiv}>
              <img src={camera} alt="Upload Image" className={styles.camera} />
            </div>
          </div>

          <div className={styles.nameEmail}>
            <div className={styles.name}>Marry Doe</div>
            <div className={styles.email}>Marry@Gmail.Com</div>
          </div>
        </div>

        <div className={styles.loremText}>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </div>
      </div>
      <div className={styles.emptyDiv}></div>
    </div>
  );
}

export default AccountSettings;
