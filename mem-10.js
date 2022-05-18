const { readFile, writeFile } = require("fs");
const util = require("util");
const readFF = util.promisify(readFile);
const writeFF = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFF("./content/first.txt", "utf8");
    const second = await readFF("./content/second.txt", "utf8");
    await writeFF(
      "./content/new-file-create.txt",
      `Hello world: ${first} ${second}.`
    );

    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();
