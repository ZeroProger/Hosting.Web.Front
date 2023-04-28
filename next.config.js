/** @type {import('next').NextConfig} */
//#TODO: возможно выключить strictMode
const isProd = process.env.REACT_APP_ENV === 'production'

const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	//skipMiddlewareUrlNormalize: false,
	//assetPrefix: isProd ? '' : undefined,
	//basePath: isProd ? '/src' : undefined,
	trailingSlash: false,
	//publicRuntimeConfig: { basePath: isProd ? '/src' : undefined },
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		domains: ['cdn.snowshock35.com', 'media.forgecdn.net'],
		unoptimized: false,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5500/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:5500/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
