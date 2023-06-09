import { recipe } from "@vanilla-extract/recipes";

export const flexStyle = recipe({
  base: { display: "flex" },

  variants: {
    // BASE
    align: {
      normal: { alignItems: "normal" },
      stretch: { alignItems: "stretch" },
      center: { alignItems: "center" },
      "flex-start": { alignItems: "flex-start" },
      "flex-end": { alignItems: "flex-end" },
      start: { alignItems: "start" },
      end: { alignItems: "end" },
      baseline: { alignItems: "baseline" },
      initial: { alignItems: "initial" },
      inherit: { alignItems: "inherit" },
    },

    justify: {
      "flex-start": { justifyContent: "flex-start" },
      "flex-end": { justifyContent: "flex-end" },
      center: { justifyContent: "center" },
      "space-between": { justifyContent: "space-between" },
      "space-around": { justifyContent: "space-around" },
      "space-evenly": { justifyContent: "space-evenly" },
      initial: { justifyContent: "initial" },
      inherit: { justifyContent: "inherit" },
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

    space: {
      0: { gap: 0 },
      1: { gap: "var(--space-001)" },
      2: { gap: "var(--space-002)" },
      3: { gap: "var(--space-003)" },
      4: { gap: "var(--space-004)" },
      5: { gap: "var(--space-005)" },
      6: { gap: "var(--space-006)" },
      7: { gap: "var(--space-007)" },
      8: { gap: "var(--space-008)" },
      10: { gap: "var(--space-010)" },
      12: { gap: "var(--space-012)" },
      16: { gap: "var(--space-016)" },
      20: { gap: "var(--space-020)" },
      40: { gap: "var(--space-040)" },
      64: { gap: "var(--space-064)" },
      80: { gap: "var(--space-080)" },
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
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },

    wrap: {
      "-moz-initial": { flexWrap: "-moz-initial" },
      inherit: { flexWrap: "inherit" },
      initial: { flexWrap: "initial" },
      nowrap: { flexWrap: "nowrap" },
      revert: { flexWrap: "revert" },
      "revert-layer": { flexWrap: "revert-layer" },
      unset: { flexWrap: "unset" },
      wrap: { flexWrap: "wrap" },
      "wrap-reverse": { flexWrap: "wrap-reverse" },
    },
  },

  defaultVariants: {
    direction: "row",
    outerSpace: 0,
    interiorSpace: 0,
    radii: "none",
    space: 0,
    wrap: "nowrap",
  },
});
