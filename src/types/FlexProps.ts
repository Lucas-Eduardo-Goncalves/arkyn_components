import { HTMLAttributes, CSSProperties } from "react";
import {
  SpaceProps,
  AlignItemsProps,
  JustifyContentProps,
  FlexDirectionProps,
  WrapProps,
  RadiiProps,
} from ".";

export type FlexProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
  interiorSpace?: SpaceProps;
  outerSpace?: SpaceProps;
  space?: SpaceProps;

  direction?: FlexDirectionProps;
  align?: AlignItemsProps;
  justify?: JustifyContentProps;
  wrap?: WrapProps;
  radii?: RadiiProps;

  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  bg?: CSSProperties["background"];
  flex?: CSSProperties["flex"];
};
