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
  variant = "solid",
  size = "md",
  isAttached,
  isDangerous,
  isLoading,
  leftIcon,
  rightIcon,
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
        outerSpace,
        radii,
        wrap,
        variant,
        isDangerous,
        isAttached,
      })}
      style={{ width, background: bg, height, ...style }}
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
