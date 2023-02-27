/** @type {import('next').NextConfig} */
//#TODO: возможно выключить strictMode
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
		API_CURSE_FORGE_URL: process.env.REACT_API_CURSE_FORGE_URL,
		API_CURSE_FORGE_KEY: process.env.REACT_API_CURSE_FORGE_KEY,
	},
	images: {
		domains: [],
		unoptimized: true,
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
