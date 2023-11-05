import fs from "fs";
import path from "path";

const targetFolderName = "components";

const searchFolder = (directory) => {
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

export default searchFolder;
