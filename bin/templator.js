import fs from "fs";
import path from "path";
import { componentContent } from "../assets/files-content.js";

const folders = [
	"components",
	"pages",
	"hoc",
	"hooks",
	"api",
	"assets",
	"util",
	"ui",
	"constants",
];

const files = [
	{
		file: "index.js",
		data: `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import searchFolder from './../assets/error-handling/search';

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);`,
	},
	{
		file: "App.jsx",
		data: componentContent("App"),
	},
	{ file: "index.css", data: `` },
	{ file: "App.module.css", data: `` },
];

const createNewSrc = () => {
	fs.mkdir("src", (err) => {
		if (err) {
			console.error(`Failed to create folder src:`, err);
			return;
		}
	});

	for (const folder of folders) {
		fs.mkdir(path.join("src", folder), (err) => {
			if (err) {
				console.error(`Failed to create folder "${folder}":`, err);
			}
		});
	}

	for (const file of files) {
		fs.writeFile(
			path.join("src", file.file),
			file.data ? file.data : "",
			(err) => {
				if (err) {
					console.error(`Failed to create file`);
				}
			}
		);
	}
};

fs.rmSync("./src", { recursive: true });
createNewSrc();
