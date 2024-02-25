import { useMediaQuery } from "react-responsive";
import { Logo } from "../logo";
import Image from "../../shared/components/image";
import Button from "../../shared/components/button";
import { imagesSVG } from "../../constants/imagesSrc";
import { IHeaderProps } from "./types";

import styles from "./styles.module.scss";

export const Header = ({
  style = {},
  className = "",
}: IHeaderProps): JSX.Element => {
  const isMobile = useMediaQuery({
    minWidth: 299,
    maxWidth: 450,
  });

  return (
    <>
      {isMobile ? (
        <header style={style} className={`${styles.container} ${className}`}>
          <Button
            className={styles.button}
            children={
              <Image src={imagesSVG.burger} size={{ width: 25, height: 15 }} />
            }
          />
          <span className={styles.line} />
          <Button
            className={styles.button}
            children={<Image src={imagesSVG.like} size={18} />}
          />
          <span className={styles.line} />
          <div className={styles.logo}>
            <Logo titled />
          </div>
          <span className={styles.line} />
          <Button
            className={styles.button}
            children={<Image src={imagesSVG.whatsapp} />}
          />
          <span className={styles.line} />
          <Button
            className={styles.button}
            children={<Image src={imagesSVG.phone} />}
          />
        </header>
      ) : (
        <></>
      )}
    </>
  );
};
