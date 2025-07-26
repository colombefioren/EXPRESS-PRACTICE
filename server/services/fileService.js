import { promises as fs } from "fs";
import { FILE_PATH } from "../config/constants.js";

export const readCharactersFile = async () => {
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Failed to read or parse characters file");
  }
};

export const writeCharactersFile = async (data) => {
  try {
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 2));
  } catch (error) {
    throw new Error("Failed to write characters file");
  }
};
