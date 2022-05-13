const { SCREENS } = require('./globals')

module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        x: 'var(--space-x)',
        y: 'var(--space-y)',
        wrap: 'var(--wrap-w)',
        'wrap-sm': 'var(--wrap-w-sm)',
        'wrap-lg': 'var(--wrap-w-lg)',
      },
    },
    screens: Object.entries(SCREENS).reduce((acc, [key, value]) => {
      acc[key] = `${value}px`
      return acc
    }, {}),
    zIndex: {
      base: '10',
      overlay: '20',
    },
  },
  corePlugins: {
    preflight: false,
  },
}
