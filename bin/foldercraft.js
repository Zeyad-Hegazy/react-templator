const {
	indexContent,
	componentContent,
	testContent,
} = require("../assets/files-content.js");

const { createFolder, createFiles } = require("../assets/fc-operations.js");

const searchFolder = require("../assets/error-handling/search.js");

const args = process.argv.slice(2);

if (args.length > 1 || args.length === 0) {
	console.error("Please provide a folder name as a command-line argument.");
	process.exit(1);
}

const folderName = args[0][0].toUpperCase() + args[0].slice(1);

if (!searchFolder("./src", "components")) {
	console.error(
		'Please provide "components" folder inside "src" folder to create component successfully'
	);
	process.exit(1);
}

createFolder(folderName);

const fileNames = [
	{ file: `index.js`, data: indexContent(folderName) },
	{ file: `${folderName}.jsx`, data: componentContent(folderName) },
	{
		file: `${folderName}.module.css`,
	},
	{
		file: `${folderName}.test.js`,
		data: testContent(folderName),
	},
];

createFiles(folderName, fileNames);
