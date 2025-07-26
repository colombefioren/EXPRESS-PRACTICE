// PUT /characters/:id ==> Update a character by ID
// DELETE /characters/:id ==> Delete a character by ID

const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 4000;

app.use(express.json());

// GET /characters ==> Get all characters

app.get("/characters", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file!" });
      return;
    }
    try {
      const characterData = JSON.parse(data);
      res.json(characterData);
    } catch (ParsingError) {
      console.error(error);
    }
  });
});

// POST /characters ==> Create a new character

app.post("/characters", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file !" });
      return;
    }
    try {
      const characterData = JSON.parse(data);
      const newCharacter = req.body;
      characterData.characters.push(newCharacter);
      fs.writeFile(
        "user.json",
        JSON.stringify(characterData, null, 2),
        "utf-8",
        (err) => {
          if (err) {
            res.status(500).json({ message: "Error writing file!" });
          } else {
            res.status(201).json(newCharacter);
          }
        }
      );
    } catch (ParsingError) {
      console.error(ParsingError);
    }
  });
});

// GET /characters/:id ==> Get a character by ID


app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
