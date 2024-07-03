import styles from './styles/IconBtn.module.css';


export const IconBtn = (probs) => {
  const { icon, value, handleClick } = probs;
  return (
    <button
      className={styles.btn}
      title='Currently Not Working'
      onClick={handleClick}
    >
      { icon }
      { value }
    </button>
  );
}
