import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import styles from './Countdown.module.css';

export function Countdown() {

    const { 
        minutos,
        segundos,
        hasFinished,
        isActive,
        startCountDown,
        resetCountdown  
    } = useContext(CountdownContext);

    const [minutosLeft, minutosRight] = String(minutos).padStart(2, '0').split('');
    const [segundosLeft, segundosRight] = String(segundos).padStart(2, '0').split('');

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
                            onClick={resetCountdown}
                        >
                            FINALIZAR CICLO
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.countdownButtonGreen}
                            onClick={startCountDown}
                        >
                            INICIAR CICLO
                        </button>
                    )}
                </>
            )}

        </div>

    );
}