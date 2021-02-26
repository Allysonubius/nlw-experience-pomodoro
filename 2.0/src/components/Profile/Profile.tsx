import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContex';
import style from './Profile.module.css';

export function Profile(){

    const { level } = useContext(ChallengesContext);

    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/allysonubius.png" alt="Allyson de Olveira Brandão"/>
            <div>
                <strong>Allyson de Oliveira Brandão</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    <span >
                        LEVEL {level}
                    </span>
                </p>
            </div>
        </div>
    );
}