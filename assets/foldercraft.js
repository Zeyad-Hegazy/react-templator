const fs = require("fs");
const path = require("path");

const createFolder = (folderName) => {
	fs.mkdirSync(path.join("src", "components", folderName), (err) => {
		if (err) {
			console.error(`Failed to create file src folder: ${err.message}`);
		}
	});
};

const creatFile = (path, data) => {
	fs.writeFileSync(path, data || "", (err) => {
		if (err) {
			console.error(`Failed to create file "${outputPath}": ${err.message}`);
		}
	});
};

const createFiles = (folderName, fileNames) => {
	fileNames.forEach((fileName) => {
		const outputPath = path.join(
			"src",
			"components",
			folderName,
			fileName.file
		);

		creatFile(outputPath, fileName.data);
	});
};

module.exports = {
	createFolder,
	creatFile,
	createFiles,
};
