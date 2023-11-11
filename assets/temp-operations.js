const fs = require("fs");
const path = require("path");

const createSrc = () => {
	fs.mkdir("src", (err) => {
		if (err) {
			console.error(`Failed to create folder src:`, err);
		}
	});
};

const createFolders = (folders) => {
	for (const folder of folders) {
		fs.mkdir(path.join("src", folder), (err) => {
			if (err) {
				console.error(`Failed to create folder "${folder}":`, err);
			}
		});
	}
};

const createFiles = (files) => {
	for (const file of files) {
		fs.writeFile(
			path.join("src", file.file),
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
	fs.rmSync("./src", { recursive: true });
};

module.exports = {
	createSrc,
	createFolders,
	createFiles,
	removeSrc,
};
