const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			"@pages": path.resolve(__dirname, "src/pages"),
			"@util": path.resolve(__dirname, "src/util"),
			"@config": path.resolve(__dirname, "src/config"),
			"@styled": path.resolve(__dirname, "src/styled-components"),
			"@components": path.resolve(__dirname, "src/components"),
		},
	},
};
