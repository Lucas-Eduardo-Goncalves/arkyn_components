import { textStyle } from "./styles.css";
import { TextProps } from "../../types";

const tag = {
  link: (props: any) => <a {...props} />,
  span: (props: any) => <span {...props} />,
  small: (props: any) => <small {...props} />,
  strong: (props: any) => <strong {...props} />,
  p: (props: any) => <p {...props} />,
  h1: (props: any) => <h1 {...props} />,
  h2: (props: any) => <h2 {...props} />,
  h3: (props: any) => <h3 {...props} />,
  h4: (props: any) => <h4 {...props} />,
  h5: (props: any) => <h5 {...props} />,
  h6: (props: any) => <h6 {...props} />,
};

export function Text({
  as,
  font,
  fontSize,
  fontWeight,
  interiorSpace,
  outerSpace,
  hoverStyle,
  ...rest
}: TextProps) {
  const Tag = tag[as];

  return (
    <Tag
      className={textStyle({
        font,
        fontSize,
        fontWeight,
        interiorSpace,
        hoverStyle,
        outerSpace,
      })}
      {...rest}
    />
  );
}
