import styles from './ExperienceBar.module.css';

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width:'50%'}}/>
                <span className={styles.currenceExperience} style={{left:'50%'}}>
                    300xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}