import { inputStyle } from "./styles.css";
import { InputProps } from "../../types";

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
  ...rest
}: InputProps) {
  return (
    <input
      className={inputStyle({
        interiorSpace,
        font,
        fontSize,
        fontWeight,
        size,
        outerSpace,
        radii,
        variant,
      })}
      style={{ width, background: bg, flex, height, ...style }}
      {...rest}
    />
  );
}
