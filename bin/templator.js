const { componentContent } = require("../assets/files-content.js");
const {
	createSrc,
	createFolders,
	createFiles,
	removeSrc,
} = require("../assets/templator.js");

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
import { createFiles } from './../assets/templator';

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

removeSrc();
createSrc();
createFolders(folders);
createFiles(files);
