import React, { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";
// import { Container } from './styles';

const Profile: React.FC = () => {
  const { level} = useContext(ChallengesContext);

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
          Level {level}
        </p>
      </div>
    </div>
  );
};
export default Profile;
