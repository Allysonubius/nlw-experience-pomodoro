import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContex';
import styles from './ChallengeBox.module.css';

export function ChallengeBox(){

    const { activeChallenge ,resetChallenge } = useContext(ChallengesContext);

    return(
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?(
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} XP</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`}/>
                        <strong>Novo Desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={styles.challengeButtonFalha}
                            onClick={resetChallenge}
                        >Falhei</button>
                        <button
                            type="button"
                            className={styles.challengeButtonSucesso}
                        >Completei</button>
                    </footer>
                </div>
            ):(
            <div className={styles.challengeBoxNotActive}>
                <strong>Finalize um ciclo para receber um desafio.</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    )
}
