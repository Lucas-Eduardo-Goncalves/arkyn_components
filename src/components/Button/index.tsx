import { buttonStyle } from "./styles.css";
import { ButtonProps } from "../../types";

export function Button({
  outerSpace,
  interiorSpace,
  direction,
  align,
  space,
  width,
  height,
  justify,
  style,
  bg,
  radii,
  wrap,
  children,
  disabled,
  variant,
  size,
  isAttached,
  isDangerous,
  isLoading,
  leftIcon,
  rightIcon,
  font,
  fontSize,
  flex,
  fontWeight,
  ...rest
}: ButtonProps) {
  return (
    <button
      disabled={isLoading || disabled}
      className={buttonStyle({
        align,
        direction,
        interiorSpace,
        justify,
        space,
        font,
        fontSize,
        fontWeight,
        size,
        outerSpace,
        radii,
        wrap,
        variant,
        isDangerous,
        isAttached,
      })}
      style={{ width, background: bg, flex, height, ...style }}
      {...rest}
    >
      {isLoading && "Loading..."}
      {!isLoading && (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </button>
  );
}
