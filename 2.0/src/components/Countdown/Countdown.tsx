import { useState, useEffect } from 'react';
import styles from './Countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutos = Math.floor(time / 60);

    const segundos = time % 60;

    const [minutosLeft, minutosRight] = String(minutos).padStart(2, '0').split('');
    const [segundosLeft, segundosRight] = String(segundos).padStart(2, '0').split('');

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time])

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