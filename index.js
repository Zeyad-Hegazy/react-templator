const fs = require("fs");

const args = process.argv.slice(2);

if (args.length > 1) {
	console.error("Please provide a folder name as a command-line argument.");
	process.exit(1);
}

const folderName = args[0];

fs.mkdir(folderName, (err) => {
	if (err) {
		console.error(`Failed to create folder "${folderName}":`, err);
	} else {
		createFiles(folderName);
	}
});

const indexContent = (fileName) => {
	return `import ${fileName} from "./${fileName}.jsx";

export default ${fileName};
`;
};

const componentContent = (fileName) => {
	return `import React from "react";
import styles from "./${fileName}.module.css";

const ${fileName} = () => {
	return <div> ${fileName} </div>;
};

export default ${fileName};
`;
};

const testContent = (fileName) => {
	return `test("${fileName} is working correctly", () => {
	expect("${fileName}").toBeInTheDocument();
});
`;
};

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
		fs.writeFile(
			`${folderName}/${fileName.file}`,
			fileName.data ? fileName.data : "",
			(err) => {
				if (err) {
					console.error(
						`Failed to create file "${folderName}/${fileName.file}":`,
						err
					);
				}
			}
		);
	});
};
