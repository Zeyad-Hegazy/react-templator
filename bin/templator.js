#!/usr/bin/env node

const {
	createSrc,
	createFolders,
	createFiles,
	removeSrc,
} = require("../assets/temp-operations.js");

const projectConfig = require("../assets/project-config.js");

function setupProject() {
	const { folders, files } = projectConfig;

	removeSrc();
	createSrc();
	createFolders(folders);
	createFiles(files);
}

setupProject();

// for testing
module.exports = {
	setupProject,
};
