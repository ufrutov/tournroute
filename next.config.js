/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
};

module.exports = {
	basePath: process.env.NODE_ENV === "production" ? "/tournroute" : undefined,
	assetPrefix:
		process.env.NODE_ENV === "production" ? "https://ufrutov.github.io/tournroute/" : undefined,
	images: {
		loader: "custom",
		domains: ["images.ctfassets.net"],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	...nextConfig,
};
