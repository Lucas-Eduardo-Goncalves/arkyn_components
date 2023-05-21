import { AnchorHTMLAttributes, HTMLAttributes } from "react";
import { FontProps, FontSizeProps, FontWeightProps, SpaceProps } from ".";

type BaseTypingProps = {
  font?: FontProps;
  fontSize?: FontSizeProps;
  fontWeight?: FontWeightProps;

  interiorSpace?: SpaceProps;
  outerSpace?: SpaceProps;
  hoverStyle?: "color" | "underline";
};

type AsLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> &
  BaseTypingProps & {
    as: "link";
  };

type AsSpanProps = Omit<HTMLAttributes<HTMLSpanElement>, "className"> &
  BaseTypingProps & {
    as: "span";
  };

type AsSmallProps = Omit<HTMLAttributes<HTMLElement>, "className"> &
  BaseTypingProps & {
    as: "small";
  };

type AsPProps = Omit<HTMLAttributes<HTMLParagraphElement>, "className"> &
  BaseTypingProps & {
    as: "p";
  };

type AsHeadingProps = Omit<HTMLAttributes<HTMLHeadingElement>, "className"> &
  BaseTypingProps & {
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export type TextProps =
  | AsLinkProps
  | AsSpanProps
  | AsSmallProps
  | AsPProps
  | AsHeadingProps;
