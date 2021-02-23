import React from "react";
import styles from "../styles/components/Profile.module.css";
// import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://github.com/AmandaCarvalho1989.png"
        alt="Amanda Carvalho"
      />

      <div>
        <strong>Amanda Carvalho</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};
export default Profile;
