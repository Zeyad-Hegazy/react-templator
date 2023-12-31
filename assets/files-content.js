const indexContent = (fileName) => {
	return `import ${fileName} from "./${fileName}.jsx";

export default ${fileName};
`;
};

const componentContent = (fileName) => {
	return `import React from "react";
import classes from "./${fileName}.module.css";

const ${fileName} = () => {
	return <div> ${fileName} </div>;
};

export default ${fileName};
`;
};

const testContent = (fileName) => {
	return `test("${fileName} is working correctly", () => {
	expect("${fileName}").toMatch(/${fileName}/);
});
`;
};

module.exports = {
	indexContent,
	componentContent,
	testContent,
};
