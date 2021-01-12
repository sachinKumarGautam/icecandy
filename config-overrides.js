const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

module.exports = (config, env) => {
  config.plugins.push(
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== "production", // Disable during development
      pngquant: {
        quality: 50,
        progressive: true,
      },
      plugins: [
        ImageminMozjpeg({
          quality: 75,
          progressive: true,
        }),
      ],
    })
  );
  return config;
};

// new ImageMinimizerPlugin({
//   minimizerOptions: {
//     // Lossless optimization with custom option
//     // Feel free to experiment with options for better result for you
//     plugins: [
//       ["gifsicle", { interlaced: true }],
//       ["jpegtran", { progressive: true }],
//       ["optipng", { optimizationLevel: 10 }],
//       [
//         "svgo",
//         {
//           plugins: [
//             {
//               removeViewBox: false,
//             },
//           ],
//         },
//       ],
//     ],
//   },
// })
