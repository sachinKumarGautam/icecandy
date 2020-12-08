const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (config, env) => {
  config.module.rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: "file-loader", // Or `url-loader` or your other loader
      },
    ],
  });

  config.plugins.push(
    new ImageMinimizerPlugin({
      minimizerOptions: {
        // Lossless optimization with custom option
        // Feel free to experiment with options for better result for you
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 9 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    })
  );
  return config;
};
