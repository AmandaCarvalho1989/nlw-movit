import { createContext, ReactNode, useState } from "react";
import challenges from "../../challenges.json";

interface Chalenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Chalenge;
  experienceToNextLevel:  number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

interface ChallengesProvider {
  children: ReactNode;
}

export function ChallengesProvider({ children }: ChallengesProvider) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(30);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = () => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        resetChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
