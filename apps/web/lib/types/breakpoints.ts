import type { SCREENS } from '../../lib'

export type Breakpoints = { [key in keyof typeof SCREENS]: boolean }
