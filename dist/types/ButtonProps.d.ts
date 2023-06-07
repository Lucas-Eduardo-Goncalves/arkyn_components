import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { SpaceProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, WrapProps, RadiiProps } from ".";
export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
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
    variant?: "outline" | "dashed" | "solid" | "ghost" | "link";
    size?: "xs" | "sm" | "md" | "lg" | "unset";
    isDangerous?: boolean;
    isLoading?: boolean;
    isAttached?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
};
//# sourceMappingURL=ButtonProps.d.ts.map