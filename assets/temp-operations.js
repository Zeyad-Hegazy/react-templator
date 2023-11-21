const fs = require("fs");
const path = require("path");

const root = process.cwd();

const createSrc = () => {
	fs.mkdir(path.join(root, "src"), (err) => {
		if (err) {
			console.error(`Failed to create folder src:`, err);
		}
	});
};

const createFolders = (folders) => {
	for (const folder of folders) {
		fs.mkdir(path.join(root, "src", folder), (err) => {
			if (err) {
				console.error(`Failed to create folder "${folder}":`, err);
			}
		});
	}
};

const createFiles = (files) => {
	for (const file of files) {
		fs.writeFile(
			path.join(root, "src", file.file),
			file.data ? file.data : "",
			(err) => {
				if (err) {
					console.error(`Failed to create file`);
				}
			}
		);
	}
};

const removeSrc = () => {
	fs.rmSync(path.join(root, "src"), { recursive: true });
};

module.exports = {
	createSrc,
	createFolders,
	createFiles,
	removeSrc,
};
