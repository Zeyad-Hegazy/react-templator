const fs = require("fs").promises;
const path = require("path");

const createNewSrc = () => {
	fs.mkdir("src", (err) => {
		if (err) {
			console.error(`Failed to create folder src:`, err);
		}
	});

	const folders = [
		"components",
		"pages",
		"hoc",
		"hooks",
		"api",
		"assets",
		"util",
		"ui",
		"constants",
	];

	for (const folder of folders) {
		fs.mkdir(path.join("src", folder), (err) => {
			if (err) {
				console.error(`Failed to create folder "${folder}":`, err);
			}
		});
	}
};
