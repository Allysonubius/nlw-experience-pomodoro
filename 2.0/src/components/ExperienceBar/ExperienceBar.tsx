


import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContex';
import styles from './ExperienceBar.module.css';

export function ExperienceBar(){

    const { currentExperience ,experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:`${percentToNextLevel}`}}/>
                <span className={styles.currenceExperience} style={{left:`${percentToNextLevel}`}}>
                    { currentExperience } xp
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}