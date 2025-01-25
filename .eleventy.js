module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/_redirects");
	eleventyConfig.addPassthroughCopy("src/assets");
	eleventyConfig.addWatchTarget("src/assets/css");
	eleventyConfig.addWatchTarget("src/assets/js");
	eleventyConfig.setServerOptions({ port: 3001 });
	eleventyConfig.setQuietMode(true);

	return {
		dir: {
			input: "src",
			output: "public",
			includes: "_includes"
		}
	};
};
