const fs = require("fs");
const mini = require("minimist");

const cmd_args = mini(process.argv.slice(2), {
  string: ["lorem"],
});

console.log(cmd_args);

fs.readFile(`${__dirname}/test.txt`, "utf8", toUpper.bind("uppcaseFile.txt"));

//Check argument
if (cmd_args.lorem === "lorem.txt") {
  //Read File asynchronously
  fs.readFile(
    `${__dirname}/${cmd_args}`,
    "utf8",
    createFile.bind("loremFile.txt")
  );
}

//function to write a new file
function toUpper(err, data) {
  fs.writeFileSync(`${__dirname}/${this}`, data.toUpperCase());
}

//function to write a new file with Uppercase Letters
function createFile(err, data) {
  fs.writeFileSync(`${__dirname}/${this}`, data);
}
