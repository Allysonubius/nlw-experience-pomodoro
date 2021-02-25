import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContex'
import styles from './CompletedChallenges.module.css'

export function CompletedChallenges() {

    const { challengeCompleted } = useContext(ChallengesContext);

    return (
        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}