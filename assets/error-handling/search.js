const fs = require("fs");
const path = require("path");

const searchFolder = (basePath, folderName) => {
	const folderPath = path.join(basePath, folderName);
	return fs.existsSync(folderPath);
};

module.exports = searchFolder;
