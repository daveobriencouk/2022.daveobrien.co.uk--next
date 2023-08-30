export type ColorSet = Partial<Record<FontWeight, string>>

export type FontWeight = 400 | 500 | 600 | 700 | 800 | 900

export type RalewayHeadingParams = {
  fontSize?: number
  lineHeight?: number
  primaryColor?: FontWeight
}
