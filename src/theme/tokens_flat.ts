import { colors } from "./colors";

// Primary
const primary = {
  default: colors.blue[600],
  hover: colors.blue[700],
  deep: colors.blue[800],
  subtle: colors.blue[200],
  dimmed: colors.blue[100],
};

// Secondary
const secondary = {
  default: colors.slate[600],
  hover: colors.slate[700],
  deep: colors.slate[800],
  subtle: colors.slate[500],
  dimmed: colors.slate[300],
};

// Success
const success = {
  default: colors.emerald[500],
  hover: colors.emerald[600],
  deep: colors.emerald[700],
  subtle: colors.emerald[100],
  dimmed: colors.emerald[50],
};

// Warning
const warning = {
  default: colors.amber[500],
  hover: colors.amber[600],
  deep: colors.amber[700],
  subtle: colors.amber[100],
  dimmed: colors.amber[50],
};

// Error
const error = {
  default: colors.red[600],
  hover: colors.red[700],
  deep: colors.red[800],
  subtle: colors.red[100],
  dimmed: colors.red[50],
};

// Info
const info = {
  default: colors.sky[500],
  hover: colors.sky[600],
  deep: colors.sky[700],
  subtle: colors.sky[100],
  dimmed: colors.sky[50],
};

// Text
const text = {
  default: colors.slate[600],
  secondary: colors.slate[500],
  contrast: colors.slate[50],
  link: colors.blue[600],
  linkHover: colors.blue[700],
};

// Background
const background = {
  surface: colors.slate[50],
  page: colors.slate[100],
  subtle: colors.slate[200],
  deep: colors.slate[300],
  neutral: colors.neutral[200],
  overlay: "rgba(0, 0, 0, 0.5)",
};

// Border
const border = {
  default: colors.slate[300],
  subtle: colors.slate[200],
  strong: colors.slate[500],
  neutral: colors.neutral[400],
  focus: colors.blue[600],
  success: colors.emerald[200],
  warning: colors.amber[200],
  error: colors.red[200],
  info: colors.sky[200],
};

// Opacity
const opacity = {
  full: "1",
  high: "0.8",
  medium: "0.6",
  low: "0.2",
  none: "0",
};

export const tokens = {
  primary,
  secondary,
  success,
  warning,
  error,
  info,
  text,
  background,
  border,
  opacity,
};
