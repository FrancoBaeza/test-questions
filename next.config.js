const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
    experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] },
    webpack(config) {
        config.experiments = { ...config.experiments, topLevelAwait: true };
        config.resolve.alias['@'] = path.resolve(__dirname)
        return config;
    },
};
