import { Button as ChakraButton } from "@chakra-ui/react";
import { IButtonProps } from "./types";

import styles from "./styles.module.scss";

const Button = ({
  children,
  className,
  backgroundColor,
  width,
  ...rest
}: IButtonProps): JSX.Element => {
  return (
    <ChakraButton
      width={width}
      backgroundColor={backgroundColor}
      className={`${styles.button} ${className}`}
      {...rest}
    >
      {children}
    </ChakraButton>
  );
};

export default Button;
