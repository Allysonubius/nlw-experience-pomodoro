import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './Countdown.module.css';

export function Countdown() {

    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountDown,
    } = useContext(CountdownContext);

    const [minutosLeft, minutosRight] = String(minutes).padStart(2, '0').split('');
    const [segundosLeft, segundosRight] = String(seconds).padStart(2, '0').split('');

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span >{minutosLeft}</span>
                    <span >{minutosRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span >{segundosLeft}</span>
                    <span >{segundosRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button
                    disabled
                    className={styles.countdownButtonFinalizado}
                >
                    CICLO ENCERRADO
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button
                            type="button"
                            className={styles.countdownButtonRed}
                            onClick={resetCountDown}
                        >
                            FINALIZAR CICLO
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButtonGreen}
                            onClick={startCountdown}
                        >
                            INICIAR CICLO
                        </button>
                    )}
                </>
            )}

        </div>

    );
}