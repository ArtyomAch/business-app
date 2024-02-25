import { useMediaQuery } from "react-responsive";
import { Contacts } from "./contacts";
import { Service } from "./services";
import { Privacy } from "./privacy";
import { IFooterProps } from "./types";

import styles from "./styles.module.scss";

export const Footer = ({}: IFooterProps): JSX.Element => {
  const isMobile = useMediaQuery({
    minWidth: 299,
    maxWidth: 750,
  });
  return (
    <footer className={styles.container}>
      {isMobile ? (
        <>
          <Service />
          <Contacts />
          <Privacy />
        </>
      ) : (
        <></>
      )}
    </footer>
  );
};
