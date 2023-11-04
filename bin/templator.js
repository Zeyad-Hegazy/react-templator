const fs = require("fs");
const path = require("path");

const createNewSrc = () => {
	fs.mkdir("src", (err) => {
		if (err) {
			console.error(`Failed to create folder src:`, err);
		}
	});

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

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);`,
		},
		{
			file: "App.jsx",
			data: `import React from "react";
import "./App.css";

const App = () => {
	return <div> App </div>;
};

export default App;
`,
		},
		{ file: "index.css", data: `` },
		{ file: "App.css", data: `` },
	];

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

fs.rmdirSync("./src", { recursive: true });
createNewSrc();
