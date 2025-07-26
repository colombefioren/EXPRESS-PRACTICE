const fs = require("fs").promises;
const { FILE_PATH } = require("../config/constants");

const readCharactersFile = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read or parse characters file");
  }
};

const writeCharactersFile = async (data) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error("Failed to write characters file");
  }
};

module.exports = {
  readCharactersFile,
  writeCharactersFile,
};
