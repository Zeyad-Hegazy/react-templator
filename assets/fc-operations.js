const fs = require("fs");
const path = require("path");

const createFolder = (folderName) => {
	const folderPath = path.join("src", "components", folderName);

	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}
};

const createFiles = (folderName, fileNames) => {
	fileNames.forEach(({ file, data }) => {
		const filePath = path.join("src", "components", folderName, file);
		fs.writeFileSync(filePath, data || "");
	});
};

module.exports = {
	createFolder,
	createFiles,
};
