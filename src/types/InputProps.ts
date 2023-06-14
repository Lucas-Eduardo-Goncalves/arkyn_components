import { InputHTMLAttributes, CSSProperties, ReactNode } from "react";
import {
  SpaceProps,
  RadiiProps,
  FontProps,
  FontSizeProps,
  FontWeightProps,
} from ".";

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  interiorSpace?: SpaceProps;
  outerSpace?: SpaceProps;

  radii?: RadiiProps;
  flex?: CSSProperties["flex"];

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bg?: CSSProperties["background"];

  font?: FontProps;
  fontSize?: FontSizeProps;
  fontWeight?: FontWeightProps;

  // Button component exclusive
  variant?: "outline" | "dashed" | "solid";
  size?: "xs" | "sm" | "md" | "lg" | "unset";

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};
