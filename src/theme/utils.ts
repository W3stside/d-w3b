import { DefaultTheme, FlattenSimpleInterpolation, css } from 'styled-components'

import { LIGHT_COLOURS, DARK_COLOURS, DEFAULT_COLOURS, GULF_COLOURS } from './styles'
import { Theme, Colors } from './styled'

export function getThemeColours(colourTheme: Theme): Colors {
  let THEME_COLOURS = LIGHT_COLOURS

  switch (colourTheme) {
    case Theme.LIGHT:
      THEME_COLOURS = LIGHT_COLOURS
      break
    case Theme.DARK:
      THEME_COLOURS = DARK_COLOURS
      break
    case Theme.GULF:
      THEME_COLOURS = GULF_COLOURS
      break
  }
  return {
    ...DEFAULT_COLOURS,
    ...THEME_COLOURS
  }
}

interface ThemeProps {
  theme: DefaultTheme
}

export const setBgColour = (themeColour: keyof Colors) => ({ theme }: ThemeProps): FlattenSimpleInterpolation =>
  css`
    background-color: ${theme[themeColour]};
  `

export const setTextColour = (themeColour: keyof Colors) => ({ theme }: ThemeProps): FlattenSimpleInterpolation =>
  css`
    color: ${theme[themeColour]};
  `
