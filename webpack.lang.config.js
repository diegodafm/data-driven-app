// const path = require("path");
// const I18nPlugin = require("i18n-webpack-plugin");
// const languages = {
//     pt_Br: require("./src/config/i18n/pt_BR-resources.json"),
// 	en_US: require("./src/config/i18n/en_US-resources.json"),
// 	sp: require("./src/config/i18n/sp-resources.json")
// };
// module.exports = Reflect.ownKeys(languages).map((language) => {
//     console.log(languages[language]);
// 	return {
// 		name: language,
// 		// mode: "development || "production",
// 		entry: "./src/config/i18n/pt_BR-resources.json",
// 		output: {
// 			path: path.join(__dirname, "dist"),
// 			filename: language + ".lang.js"
// 		},
// 		plugins: [new I18nPlugin(languages[language])]
// 	};
// });