import { flexStyle } from "./styles.css";
import { FlexProps } from "../../types";

export function Flex({
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
  flex,
  radii,
  wrap,
  ...rest
}: FlexProps) {
  return (
    <div
      className={flexStyle({
        align,
        direction,
        interiorSpace,
        justify,
        space,
        outerSpace,
        radii,
        wrap,
      })}
      style={{ width, background: bg, height, flex, ...style }}
      {...rest}
    />
  );
}
