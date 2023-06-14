import { inputStyle } from "./styles.css";
import { InputProps } from "../../types";
import { Flex } from "../Flex";
import { useId } from "react";
import { Text } from "../Text";

export function Input({
  outerSpace,
  interiorSpace,
  width,
  height,
  style,
  bg,
  radii,
  children,
  variant,
  size,
  leftIcon,
  rightIcon,
  font,
  fontSize,
  flex,
  fontWeight,
  error,
  label,
  borderSize,
  ...rest
}: InputProps) {
  const id = useId();
  return (
    <Flex>
      {label && <label htmlFor={id}></label>}
      <input
        id={id}
        className={inputStyle({
          interiorSpace,
          font,
          fontSize,
          fontWeight,
          size,
          asError: !!error,
          borderSize,
          outerSpace,
          radii,
          variant,
        })}
        style={{ width, background: bg, flex, height, ...style }}
        {...rest}
      />
      {error && <Text as="strong">{error}</Text>}
    </Flex>
  );
}
