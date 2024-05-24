/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config.js')

const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, './src/styles')],
    },
    // i18n
}

module.exports = nextConfig
