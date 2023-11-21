const fs = require("fs");
const path = require("path");

const root = process.cwd();

const createFolder = (folderName) => {
	const folderPath = path.join(root, "src", "components", folderName);

	if (!fs.existsSync(folderPath)) {
		fs.mkdirSync(folderPath);
	}
};

const createFiles = (folderName, fileNames) => {
	fileNames.forEach(({ file, data }) => {
		const filePath = path.join(root, "src", "components", folderName, file);
		fs.writeFileSync(filePath, data || "");
	});
};

module.exports = {
	createFolder,
	createFiles,
};
