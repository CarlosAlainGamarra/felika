import styles from './Teams.module.css'

export const Teams = () => {
  return (
    <div className={styles.teams_container}>
      <div className={styles.club}>Club del anorak</div>
      <div className={styles.sociedad}>Sociedad de la muerte</div>
    </div>
  )
}