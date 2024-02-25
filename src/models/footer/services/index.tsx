import { IServiceProps } from "./types";

import styles from "./styles.module.scss";

export const Service = ({}: IServiceProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>Лендинг</li>
        <li className={styles.item}>Многостраничник</li>
        <li className={styles.item}>Интернет-Магазин</li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>Каталог готовых сайтов</li>
        <li className={styles.item}>Настройка рекламы</li>
        <li className={styles.item}>SEO продвижение</li>
      </ul>
    </div>
  );
};
