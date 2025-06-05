/* eslint-disable @typescript-eslint/no-empty-object-type */
import { DefaultTheme } from "@/styles/themes/defaults";
import "styled-components";

type ThemeType = typeof DefaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
