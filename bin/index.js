import yargs from "yargs";

const argv = yargs
	.option("name", {
		alias: "n",
		description: "Your name",
		type: "string",
		demandOption: true, // Make the option required
	})
	.option("age", {
		alias: "a",
		description: "Your age",
		type: "number",
		demandOption: true,
	}).argv;

console.log("Name:", argv.name);
console.log("Age:", argv.age);
