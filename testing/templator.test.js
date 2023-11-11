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

test("Setup Project Functions", () => {
	const { folders, files } = projectConfig;

	removeSrc();
	createSrc();
	createFolders(folders);
	createFiles(files);

	expect(removeSrc).toHaveBeenCalled();
	expect(createSrc).toHaveBeenCalled();
	expect(createFolders).toHaveBeenCalledWith(folders);
	expect(createFiles).toHaveBeenCalledWith(files);
});
