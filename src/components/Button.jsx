import styles from './styles/Button.module.css';


export const Button = (probs) => {
  const { value, onClick } = probs;

  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      { value }
    </button>
  );
}
