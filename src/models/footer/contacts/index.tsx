import Image from "../../../shared/components/image";
import { Logo } from "../../../models/logo";
import { imagesSVG } from "../../../constants/imagesSrc";
import { IContactsProps } from "./types";

import styles from "./styles.module.scss";

export const Contacts = ({}: IContactsProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.image}>
          <Image size={16} src={imagesSVG.instagram} />
        </div>
        <div className={styles.image}>
          <Image size={16} src={imagesSVG.whatsappBlack} />
        </div>
        <div className={styles.image}>
          <Image size={16} src={imagesSVG.message} />
        </div>
      </div>
      <div className={styles.block}>
        <Logo titled />
        <span className={styles.number}>
          <Image size={11} src={imagesSVG.call} />
          +7(495) 123 34 45
        </span>
      </div>
    </div>
  );
};
