const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

console.log("sachin", ImageMinimizerPlugin);

module.exports = (config, env) => {
  config.module.rules.push({
    test: /\.(jpe?g|png|gif|svg)$/i,
    use: [
      {
        loader: "file-loader", // Or `url-loader` or your other loader
      },
      {
        loader: ImageMinimizerPlugin.loader,
        options: {
          severityError: "warning", // Ignore errors on corrupted images
          minimizerOptions: {
            plugins: ["gifsicle"],
          },
        },
      },
    ],
  });

  console.log("sachin", ImageMinimizerPlugin);

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

  console.log("config", config);
  return config;
};
