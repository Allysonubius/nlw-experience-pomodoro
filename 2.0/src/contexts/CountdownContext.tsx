import { createContext, ReactNode, useEffect, useState , useContext} from 'react';
import { ChallengesContext } from './ChallengesContex';

interface CountdownContextData {
    minutos:number;
    segundos:number;
    hasFinished:boolean;
    isActive:boolean;
    startCountDown:() => void;
    resetCountdown:() => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false);

    const minutos = Math.floor(time / 60);

    const segundos = time % 60;

    function startCountDown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0) {
            setHasFinished(false);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time])

    return (
        <CountdownContext.Provider value={{
            minutos,
            segundos,
            hasFinished,
            isActive,
            startCountDown,
            resetCountdown,
        }}>
        </CountdownContext.Provider>
    )
}