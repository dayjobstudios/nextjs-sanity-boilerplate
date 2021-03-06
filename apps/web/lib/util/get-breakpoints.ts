import type { Breakpoints } from '../types'
import { SCREENS } from '..'

/**
 * Returns an object of screen size/boolean key/values
 * based on comparing each size defined in the `SCREENS`
 * global object to a given screen width
 */
export const getBreakpoints = (size: number): Breakpoints =>
  Object.fromEntries(
    Object.entries(SCREENS).map(([key, val]) => [key, val <= size])
  ) as Breakpoints

export default getBreakpoints
