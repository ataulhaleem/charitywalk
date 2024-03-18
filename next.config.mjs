// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output:'export',
  // basePath: '/charitywalk',
  reactStrictMode : true,
  // webpack: (config) => {
  //     config.module.rules.push({
  //       test: /\.(node)$/i,
  //       use: [
  //         {
  //           loader: 'file-loader',
  //           options: {
  //             publicPath: '/_next',
  //             outputPath: 'dist/node',
  //             name: '[name].[ext]',
  //             esModule: false,
  //           },
  //         },
  //       ],
  //     });
  
    //   return config;
    // },
  };
  
  export default nextConfig;
  