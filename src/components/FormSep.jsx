import styles from './styles/FormSep.module.css';


export const FormSep = () => {
  return (
    <div>
      <span className={styles.line}></span>
      <span className={styles.txt}> or </span>
      <span className={styles.line}></span>
    </div>
  );
}
