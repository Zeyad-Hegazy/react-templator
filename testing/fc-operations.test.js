const fs = require("fs");
const path = require("path");
const { createFolder, createFiles } = require("../assets/fc-operations.js");

const folderName = "MyComponentTest";

beforeEach(() => {
	const folderPath = path.join("./src", "components", folderName);
	if (fs.existsSync(folderPath)) fs.rmdirSync(folderPath, { recursive: true });
});

describe("test folder craft functions", () => {
	test("createFolder creates folders", () => {
		createFolder(folderName);
		const folderPath = path.join("./src", "components", folderName);
		expect(fs.existsSync(folderPath)).toBe(true);
	});

	test("createFiles create files", () => {
		const fileNames = [
			{ file: "index.js", data: "Test Index Content" },
			{ file: "MyComponent.jsx", data: "Test Component Content" },
		];

		createFiles(folderName, fileNames);

		fileNames.forEach(({ file, data }) => {
			const filePath = path.join("./src", "components", folderName, file);
			expect(fs.existsSync(filePath)).toBe(true);
			if (data) expect(fs.readFileSync(filePath, "utf-8")).toBe(data);
		});
	});
});
