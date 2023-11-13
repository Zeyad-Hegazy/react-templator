const {
	indexContent,
	componentContent,
	testContent,
} = require("../assets/files-content");

const component = "MyComponent";

describe("test generate component files content", () => {
	test("indexContent generate correct content", () => {
		const content = indexContent(component);
		expect(content).toContain(`export default ${component}`);
	});

	test("componentContent generates correct content", () => {
		const content = componentContent(component);
		expect(content).toContain(`<div> ${component} </div>`);
	});

	test("testContent generates correct content", () => {
		const content = testContent(component);
		expect(content).toContain(`expect("${component}").toMatch(/${component}/)`);
	});
});
