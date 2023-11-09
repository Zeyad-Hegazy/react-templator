const fs = require("fs");
const { createSrc, removeSrc } = require("../assets/templator.js");

jest.mock("../assets/templator.js", () => ({
	removeSrc: jest.fn(),
	createSrc: jest.fn(),
}));

const srcPath = "./src";

describe("create src structure", () => {
	test("src folder deleted", () => {
		removeSrc.mockImplementation();
		removeSrc();
		const isSrcFolderExists = fs.existsSync(srcPath);
		expect(isSrcFolderExists).toBe(false);
	});

	// test("src folder created", () => {
	// 	createSrc();
	// 	const isSrcFolderExists = fs.existsSync(srcPath);
	// 	expect(isSrcFolderExists).toBe(true);
	// });
});
