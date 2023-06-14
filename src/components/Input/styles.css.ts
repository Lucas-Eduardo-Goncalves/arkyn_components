import { recipe } from "@vanilla-extract/recipes";

export const inputStyle = recipe({
  base: {
    ":disabled": {
      cursor: "not-allowed",
    },
  },
  variants: {
    // BASE
    font: {
      default: { fontFamily: "var(--font-default)" },
      code: { fontFamily: "var(--font-code)" },
    },

    fontSize: {
      xxs: { fontSize: "var(--font-xxs)" },
      xs: { fontSize: "var(--font-xs)" },
      sm: { fontSize: "var(--font-sm)" },
      md: { fontSize: "var(--font-md)" },
      lg: { fontSize: "var(--font-lg)" },
      xl: { fontSize: "var(--font-xl)" },
      "2xl": { fontSize: "var(--font-3xl)" },
      "3xl": { fontSize: "var(--font-3xl)" },
      "4xl": { fontSize: "var(--font-4xl)" },
    },

    fontWeight: {
      light: { fontWeight: "var(--font-light)" },
      regular: { fontWeight: "var(--font-regular)" },
      bold: { fontWeight: "var(--font-bold)" },
    },

    radii: {
      none: { borderRadius: 0 },
      px: { borderRadius: "var(--radii-px)" },
      xs: { borderRadius: "var(--radii-xs)" },
      sm: { borderRadius: "var(--radii-sm)" },
      md: { borderRadius: "var(--radii-md)" },
      lg: { borderRadius: "var(--radii-lg)" },
      full: { borderRadius: "var(--radii-full)" },
    },

    interiorSpace: {
      0: { padding: 0 },
      1: { padding: "var(--space-001)" },
      2: { padding: "var(--space-002)" },
      3: { padding: "var(--space-003)" },
      4: { padding: "var(--space-004)" },
      5: { padding: "var(--space-005)" },
      6: { padding: "var(--space-006)" },
      7: { padding: "var(--space-007)" },
      8: { padding: "var(--space-008)" },
      10: { padding: "var(--space-010)" },
      12: { padding: "var(--space-012)" },
      16: { padding: "var(--space-016)" },
      20: { padding: "var(--space-020)" },
      40: { padding: "var(--space-040)" },
      64: { padding: "var(--space-064)" },
      80: { padding: "var(--space-080)" },
    },

    outerSpace: {
      0: { margin: 0 },
      1: { margin: "var(--space-001)" },
      2: { margin: "var(--space-002)" },
      3: { margin: "var(--space-003)" },
      4: { margin: "var(--space-004)" },
      5: { margin: "var(--space-005)" },
      6: { margin: "var(--space-006)" },
      7: { margin: "var(--space-007)" },
      8: { margin: "var(--space-008)" },
      10: { margin: "var(--space-010)" },
      12: { margin: "var(--space-012)" },
      16: { margin: "var(--space-016)" },
      20: { margin: "var(--space-020)" },
      40: { margin: "var(--space-040)" },
      64: { margin: "var(--space-064)" },
      80: { margin: "var(--space-080)" },
    },

    // SPECIFIC
    variant: {
      unset: {},
      solid: {
        border: "none",
        background: "var(--terceary-950)",
        outline: "2px solid transparent",

        ":focus": { outlineColor: "var(--primary-500)" },
      },
      dashed: {
        border: "1px dashed var(--terceary-800)",
        background: "transparent",
        outline: "2px solid transparent",

        ":focus": {
          outlineColor: "var(--primary-500)",
          borderColor: "var(--primary-500)",
        },
      },
      outline: {
        border: "1px solid var(--terceary-800)",
        background: "transparent",
        outline: "2px solid transparent",

        ":focus": {
          outlineColor: "var(--primary-500)",
          borderColor: "var(--primary-500)",
        },
      },
    },

    size: {
      unset: { height: "unset" },
      xs: { height: "var(--size-xs)" },
      sm: { height: "var(--size-sm)" },
      md: { height: "var(--size-md)" },
      lg: { height: "var(--size-lg)" },
    },
  },

  defaultVariants: {
    outerSpace: 0,
    interiorSpace: 4,
    radii: "sm",
    variant: "solid",
    size: "md",
    font: "default",
    fontSize: "md",
    fontWeight: "bold",
  },
});
