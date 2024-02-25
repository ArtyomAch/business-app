import { imagesSVG } from "../..//constants/imagesSrc";
import Image from "../../shared/components/image";
import { ILogoProps } from "./types";

import styles from "./styles.module.scss";

export const Logo = ({
  width = 75,
  titled = false,
}: ILogoProps): JSX.Element => {
  const height = width / 3.75;
  return (
    <div
      style={{ width, height: height * (titled ? 1 : 3) }}
      className={styles.container}
    >
      <Image src={imagesSVG.logo} />
      {titled && <h1 className={styles.title}>RANSS</h1>}
    </div>
  );
};
