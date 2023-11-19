#!/usr/bin/env node
const fs = require("fs");
const EventEmmiter = require("events");

const {
	createSrc,
	createFolders,
	createFiles,
	removeSrc,
} = require("../assets/temp-operations.js");

const projectConfig = require("../assets/project-config.js");

const myEmmeter = new EventEmmiter();

if (!fs.existsSync("setupFlag.txt")) {
	myEmmeter.once("setup", () => {
		const { folders, files } = projectConfig;

		removeSrc();
		createSrc();
		createFolders(folders);
		createFiles(files);

		fs.writeFileSync("setupFlag.txt", "setup completed");
	});

	myEmmeter.emit("setup");
} else {
	console.log("Setup has already been completed. Exiting...");
}
