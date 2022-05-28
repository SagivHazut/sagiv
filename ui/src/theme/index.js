import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { baseThemeOptions } from "./base-theme-options";

const baseTheme = createTheme(baseThemeOptions, responsiveFontSizes);
export const theme = responsiveFontSizes(baseTheme);

export default theme;
