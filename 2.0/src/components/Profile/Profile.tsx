import style from './Profile.module.css';

export function Profile(){
    return(
        <div className={style.profileContainer}>
            <img src="https://github.com/allysonubius.png" alt="Allyson de Olveira Brandão"/>
            <div>
                <strong>Allyson de Oliveira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    LEVEL 01</p>
            </div>
        </div>
    );
}