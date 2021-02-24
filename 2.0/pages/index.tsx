import React from "react";
import { ExperienceBar } from "../src/components/ExperienceBar/ExperienceBar";
import { Profile } from "../src/components/Profile/Profile";


import styles from '../src/styles/components/pages/Home.module.css';

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
