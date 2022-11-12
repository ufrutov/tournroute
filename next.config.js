/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
};

module.exports = {
	images: {
		domains: ["images.ctfassets.net"],
	},
	compiler: {
		// Enables the styled-components SWC transform
		styledComponents: true,
	},
	...nextConfig,
};
