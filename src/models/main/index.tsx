import { IMainProps } from "./types";

import styles from "./styles.module.scss";

export const Main = ({ children }: IMainProps): JSX.Element => {
  return <main className={styles.container}>{children}</main>;
};
