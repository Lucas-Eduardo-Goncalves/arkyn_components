import { HTMLAttributes, CSSProperties } from "react";
import { SpaceProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, WrapProps, RadiiProps } from "../../types";
export type FlexProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    interiorSpace?: SpaceProps;
    outerSpace?: SpaceProps;
    space?: SpaceProps;
    bg?: string;
    direction?: FlexDirectionProps;
    align?: AlignItemsProps;
    justify?: JustifyContentProps;
    wrap?: WrapProps;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    radii?: RadiiProps;
};
//# sourceMappingURL=types.d.ts.map