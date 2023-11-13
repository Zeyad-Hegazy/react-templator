const { createFolder, createFiles } = require("../assets/fc-operations.js");

jest.mock("../assets/fc-operations.js", () => ({
	createFolder: jest.fn(),
	createFiles: jest.fn(),
}));

const folderName = "MyComponentTest";

describe("test folder craft functions", () => {
	test("createFolder creates folders", () => {
		createFolder(folderName);
		expect(createFolder).toHaveBeenCalledWith(folderName);
	});

	test("createFiles create files", () => {
		const fileNames = [
			{ file: "index.js", data: "Test Index Content" },
			{ file: "MyComponent.jsx", data: "Test Component Content" },
		];

		createFiles(folderName, fileNames);

		expect(createFiles).toHaveBeenCalledWith(folderName, fileNames);
	});
});
