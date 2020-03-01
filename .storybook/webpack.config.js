const path = require("path");

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("babel-loader"),
    options: {
      presets: [require.resolve("next/babel")]
    }
  });

  /* PostCSS Support */
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer")
          ]
        }
      }
    ],

    include: path.resolve(__dirname, "../")
  });

  config.module.rules.push({
    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
    loaders: ["file-loader"],
    include: path.resolve(__dirname, "../")
  });

  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
