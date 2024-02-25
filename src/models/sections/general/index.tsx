import { useEffect, useState } from "react";
import Button from "../../../shared/components/button";
import Image from "../../../shared/components/image";
import { imagesPNG } from "../../../constants/images";
import { IGeneralProps } from "./types";

import styles from "./styles.module.scss";

export const General = ({}: IGeneralProps): JSX.Element => {
  const [compositionSize, setCompositionSize] = useState<number>(
    window.innerWidth
  );
  useEffect(() => {
    setCompositionSize(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <section
      style={{ backgroundImage: imagesPNG.cloud }}
      className={styles.container}
    >
      <Image className={styles.background} src={imagesPNG.cloud} />
      <h3 className={styles.title}>
        <span className={styles.green}>Создание и продвижение</span> сайтов в
        Москве
      </h3>
      <p className={styles.descr}>Закройте вопрос с клиентами раз и навсегда</p>
      <div style={{ height: compositionSize }} className={styles.composition}>
        <Image className={styles.laptop} src={imagesPNG.laptop} size={"100%"} />
        <Image
          className={styles.phone}
          src={imagesPNG.phone}
          width={140}
          height={160}
        />
      </div>
      <p className={styles.descr2}>
        Делаем{" "}
        <span className={styles.green}>красивые и современные сайты</span> для
        привличение клиентов в ваш бизнес
      </p>
      <div className={styles.buttonBox}>
        <Button
          color="#fff"
          children="Оставить заявку и получить КП"
          className={styles.button}
        />
        <Image
          className={styles.btnImage}
          src={imagesPNG.catalog}
          height={130}
          width={150}
        />
      </div>
    </section>
  );
};
