import { IGeneralProps } from "./types";

import styles from "./styles.module.scss";

export const General = ({}: IGeneralProps): JSX.Element => {
  return <section className={styles.container}></section>;
};
