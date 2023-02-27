import styles from './LibsUi.module.css';

/* eslint-disable-next-line */
export interface LibsUiProps {}

export function LibsUi(props: LibsUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsUi!</h1>
    </div>
  );
}

export default LibsUi;
