// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");

// console.log("sachin", ImageMinimizerPlugin);

module.exports = (config, env) => {
  // config.module.rules.push({
  //   test: /\.(jpe?g|png|gif|svg)$/i,
  //   use: [
  //     {
  //       loader: "file-loader", // Or `url-loader` or your other loader
  //     },
  //   ],
  // });

  // console.log("sachin", ImageMinimizerPlugin);

  config.plugins.push(
    new ImageminPlugin({
      // disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: "20",
      },
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    })
  );

  console.log("config", config);
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
