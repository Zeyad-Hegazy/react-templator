const {
	removeSrc,
	createSrc,
	createFolders,
	createFiles,
} = require("../assets/temp-operations.js");
const projectConfig = require("../assets/project-config.js");

jest.mock("../assets/temp-operations.js", () => ({
	removeSrc: jest.fn(),
	createSrc: jest.fn(),
	createFolders: jest.fn(),
	createFiles: jest.fn(),
}));

beforeEach(() => {
	jest.clearAllMocks();
});

describe("Setup Project Functions", () => {
	test("remove src", () => {
		removeSrc();

		expect(removeSrc).toHaveBeenCalled();
	});
	test("create src", () => {
		createSrc();
		expect(createSrc).toHaveBeenCalled();
	});
	test("create folders", () => {
		const { folders } = projectConfig;

		createFolders(folders);

		expect(createFolders).toHaveBeenCalledWith(folders);
	});
	test("create files", () => {
		const { files } = projectConfig;

		createFiles(files);

		expect(createFiles).toHaveBeenCalledWith(files);
	});
});
