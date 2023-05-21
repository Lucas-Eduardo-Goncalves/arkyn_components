import { HTMLAttributes, CSSProperties } from "react";
import { SpaceProps, AlignItemsProps, JustifyContentProps, FlexDirectionProps, WrapProps, RadiiProps, ColorsProps } from ".";
export type FlexProps = Omit<HTMLAttributes<HTMLDivElement>, "className"> & {
    interiorSpace?: SpaceProps;
    outerSpace?: SpaceProps;
    space?: SpaceProps;
    bg?: ColorsProps;
    direction?: FlexDirectionProps;
    align?: AlignItemsProps;
    justify?: JustifyContentProps;
    wrap?: WrapProps;
    width?: CSSProperties["width"];
    height?: CSSProperties["height"];
    radii?: RadiiProps;
};
//# sourceMappingURL=FlexProps.d.ts.map