/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /styles\.cssx$/,
      use: [defaultLoaders.babel, { loader: require('styled-jsx/webpack').loader }],
    })

    return config
  },
}

module.exports = nextConfig
