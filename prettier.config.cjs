/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  endOfLine: 'auto',
  tabWidth: 2,
  singleQuote: true,
};

module.exports = config;
