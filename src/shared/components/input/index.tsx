import { Input as ChakrInput } from "@chakra-ui/react";
import { IInputProps } from "./types";

import styles from "./styles.module.scss";

const Input = ({
  icon,
  width,
  value,
  onChange,
  className,
  backgroundColor,
  ...rest
}: IInputProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <ChakrInput
        value={value}
        onChange={onChange}
        className={className}
        backgroundColor={backgroundColor}
        {...rest}
      />
      {icon && icon}
    </div>
  );
};

export default Input;
