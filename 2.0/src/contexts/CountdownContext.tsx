import { createContext, ReactNode, useEffect, useState , useContext} from 'react';
import { ChallengesContext } from './ChallengesContex';

interface CountdownContextData {
    minutes: number;
    seconds: number;
    hasFinished: boolean;
    isActive: boolean;
    startCountdown: () => void;
    resetCountDown: () => void;
  }
  
  interface CountdownProviderProps {
    children: ReactNode;
  }
  
  export const CountdownContext = createContext({} as CountdownContextData);
  
  let countdownTimeout: NodeJS.Timeout;
  
  export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext);
  
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
  
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    function startCountdown() {
      setIsActive(true);
    }
  
    function resetCountDown() {
      clearTimeout(countdownTimeout);
      setIsActive(false);
      setHasFinished(false);
      setTime(0.1 * 60);
    }
  
    useEffect(() => {
      if (isActive && time > 0) {
        countdownTimeout = setTimeout(() => {
          setTime(time - 1);
        }, 1000)
      } else if (isActive && time === 0) {
        setHasFinished(true);
        setIsActive(false);
        startNewChallenge();
      }
    }, [isActive, time])
  
    return (
      <CountdownContext.Provider value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountDown,
      }}>
        {children}
      </CountdownContext.Provider>
    )
  }