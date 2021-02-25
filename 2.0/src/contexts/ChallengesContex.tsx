import {createContext, ReactNode, useState, } from 'react';
import challenges from '../../challenges.json';

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengeCompleted: number;
    experienceToNextLevel:number;
    activeChallenge:Challenge;
    leveUp: () => void;
    startNewChallenge: () => void;
    resetChallenge: () => void;
}

interface ChallengeProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext ({} as ChallengesContextData);

export function ChallengesProvider({ children } : ChallengeProviderProps){
    const [level , setLevel]  = useState(1);
    const [ currentExperience , setCurrentExperience] = useState(0);
    const [ challengeCompleted , setChallengeCompleted ] = useState(0);

    const [ activeChallenge, setActiveChallenge ] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) *4 , 2);

    function leveUp(){
        setLevel(level + 1);
    }   

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)

        const challenge = challenges[randomChallengeIndex];

        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return(
        <ChallengesContext.Provider 
        value={{
            level,
             currentExperience,
             experienceToNextLevel,
              challengeCompleted,
               leveUp,
               startNewChallenge,
               activeChallenge,
               resetChallenge
            }}>
            { children }
        </ChallengesContext.Provider>
    );
}