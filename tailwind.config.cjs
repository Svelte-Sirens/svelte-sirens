/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
  plugins: [require('@tailwindcss/forms'), require('@skeletonlabs/skeleton/tailwind/theme.cjs'),
  require('tailwindcss-fluid-type')],
  presets: [require('./tailwind.theme.cjs')]
}

