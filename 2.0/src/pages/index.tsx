import React from "react";
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { Countdown } from "../components/Countdown/Countdown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
