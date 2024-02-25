import { IPrivacyProps } from "./types";

import styles from "./styles.module.scss";

export const Privacy = ({}: IPrivacyProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Политика кондифициальности</span>
      <span className={styles.text}>© Все права защищены</span>
    </div>
  );
};
