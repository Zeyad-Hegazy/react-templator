import fs from "fs";
import path from "path";

import {
	indexContent,
	componentContent,
	testContent,
} from "../assets/files-content.js";

import searchFolder from "../assets/error-handling/search.js";

const args = process.argv.slice(2);

if (args.length > 1 || args.length === 0) {
	console.error("Please provide a folder name as a command-line argument.");
	process.exit(1);
}

const folderName = args[0][0].toUpperCase() + args[0].slice(1);

if (!searchFolder("./src")) {
	console.error(
		'Please provide "components" folder inside "src" folder to create component successfully'
	);
	process.exit(1);
}

fs.mkdirSync(path.join("src", "components", folderName), (err) => {
	if (err) {
		console.error(`Failed to create file src folder: ${err.message}`);
	}
});

const createFiles = (folderName) => {
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

	fileNames.forEach((fileName) => {
		const outputPath = path.join(
			"src",
			"components",
			folderName,
			fileName.file
		);

		fs.writeFileSync(outputPath, fileName.data ? fileName.data : "", (err) => {
			if (err) {
				console.error(`Failed to create file "${outputPath}": ${err.message}`);
			}
		});
	});
};

createFiles(folderName);
