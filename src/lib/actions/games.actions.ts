import { promises as fs } from "fs";

//this simulates a database call for fetching all ganes, filtering ideally should be done in the database itself when fetching data and limiting by pagination, however not here since we are using a json file

export async function getAllGames() {
    var path = require("path");
    // Get the path of the json file
    const configDirectory = path.resolve(process.cwd(), "public");
    const file = await fs.readFile(configDirectory + "/data/data.json", "utf8");
    const data = await JSON.parse(file);
    return data;
}
