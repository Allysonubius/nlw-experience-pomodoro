import { useState , useEffect} from 'react';
import styles from './Countdown.module.css';

export function Countdown() {
    const [ time, setTime ] = useState(25 * 60);
    const [ active, setActive ] = useState(false)

    const minutos = Math.floor(time / 60);

    const segundos = time % 60;

    const [ minutosLeft , minutosRight ] = String(minutos).padStart(2,'0').split('');
    const [ segundosLeft , segundosRight] = String(segundos).padStart(2,'0').split('');

    function startCountDown() {
        setActive(true);
    }
    
    useEffect(() =>{
        if(active && time > 0){
            setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }
    } , [ active , time ])

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
            <button 
                type="button" 
                className={styles.countdownButton}
                onClick={startCountDown}    
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}