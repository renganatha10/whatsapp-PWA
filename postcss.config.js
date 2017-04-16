module.exports = {
  plugins: [
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-uncss').postcssPlugin
  ]
};
