import React from "react";
import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";

import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
          <CompletedChallenges/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
