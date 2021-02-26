import React, { useContext, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/ChallengeBox.module.css";

// import { Container } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  console.log(activeChallenge);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Level Up" />
            <strong>Novo desafio</strong>
            <p> {activeChallenge.description}</p>
          </main>
          <footer>
            <button
              type="button"
              className={styles.challengeFailedButton}
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button
              type="button"
              className={styles.challengeSucceededButton}
              onClick={() => {}}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up" />
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
