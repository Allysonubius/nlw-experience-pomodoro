import React from "react";
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
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}
