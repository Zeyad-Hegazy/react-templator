const fs = require("fs");
const path = require("path");

const searchFolder = (directory, targetFolderName) => {
	const files = fs.readdirSync(directory);

	for (const file of files) {
		const filePath = path.join(directory, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			if (file === targetFolderName) {
				return true;
			} else {
				searchFolder(filePath);
			}
		}
	}
	return false;
};

module.exports = searchFolder;
