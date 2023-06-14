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
  "className" | "size"
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
  label?: string;
  error?: string;

  variant?: "outline" | "dashed" | "solid";
  size?: "xs" | "sm" | "md" | "lg" | "unset";
  borderSize?: "xs" | "sm" | "md" | "lg";

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};
