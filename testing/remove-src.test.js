const fs = require("fs");
const { removeSrc } = require("../assets/templator.js");

test("src folder deleted", () => {
	const srcPath = "./src";

	try {
		removeSrc();
		const isSrcFolderExists = fs.existsSync(srcPath);
		expect(isSrcFolderExists).toBe(false);
	} catch (error) {
		console.error("Error checking src folder existence:", error);
	}
});
