import { inputStyle } from "./styles.css";
import { InputProps } from "../../types";
import { Flex } from "../Flex";
import { Text } from "../Text";

export function Input({
  outerSpace,
  interiorSpace,
  width,
  height,
  style,
  bg,
  radii,
  children,
  variant,
  size,
  leftIcon,
  rightIcon,
  font,
  fontSize,
  flex,
  fontWeight,
  error,
  label,
  borderSize,
  flexProps,
  errorProps,
  ...rest
}: InputProps) {
  return (
    <Flex direction="column" space={2} {...flexProps}>
      {label && (
        <label
          style={{
            color: "var(--terceary-200)",
            fontWeight: "var(--font-regular)",
          }}
        >
          {label}
        </label>
      )}

      <input
        className={inputStyle({
          interiorSpace,
          font,
          fontSize,
          fontWeight,
          size,
          asError: !!error,
          borderSize,
          outerSpace,
          radii,
          variant,
        })}
        style={{ width, background: bg, flex, height, ...style }}
        {...rest}
      />

      {error && (
        <Text
          as="strong"
          style={{ color: "var(--danger-500)" }}
          {...errorProps}
        >
          {error}
        </Text>
      )}
    </Flex>
  );
}
