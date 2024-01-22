/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	//output: 'export',
	poweredByHeader: false,
	optimizeFonts: false,
	//skipMiddlewareUrlNormalize: false,
	//assetPrefix: isProd ? `${process.env.REACT_APP_SERVER_URL}/assets` : undefined,
	basePath: '',
	//trailingSlash: false,
	//publicRuntimeConfig: { basePath: isProd ? '/src' : undefined },
	env: {
		APP_URL: process.env.APP_URL,
		APP_ENV: process.env.APP_ENV,
		APP_SERVER_URL: process.env.SERVER_URL,
	},
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
		domains: ['media.forgecdn.net', 'www.youtube.com'],
	},
}

module.exports = nextConfig
