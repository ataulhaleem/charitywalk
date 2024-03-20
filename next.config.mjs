// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// webpack: (config) => {
//   config.module.rules.push({
//     test: /\.(node)$/i,
//     use: [
//       {
//         loader: 'file-loader',
//         options: {
//           publicPath: '/_next',
//           outputPath: 'dist/node',
//           name: '[name].[ext]',
//           esModule: false,
//         },
//       },
//     ],
//   });
//   return config;
// },

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/charitywalk",
  output:"export",
  reactStrictMode : true,
  env : {
    POSTGRES_URL : `${process.env.NEXT_PUBLIC_POSTGRES_URL}`
  }
  };
  
  export default nextConfig;
  

  