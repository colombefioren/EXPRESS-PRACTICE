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
      console.error(ParsingError);
      res.status(500).json({ message: "Failed to parse data." });
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
      const newCharacter = {
        id: characterData.characters.length + 1,
        ...req.body,
      };
      characterData.characters.push(newCharacter);
      fs.writeFile(
        "user.json",
        JSON.stringify(characterData, null,2),
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
      res.status(500).json({ message: "Failed to parse data." });
    }
  });
});

// GET /characters/:id ==> Get a character by ID

app.get("/characters/:id", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file !" });
      return;
    }
    try {
      const wantedCharacterId = +req.params.id;
      const characterData = JSON.parse(data);
      const wantedCharacterData = characterData.characters.filter(
        (character) => character.id === wantedCharacterId
      );
      if (wantedCharacterData.length === 0) {
        res.status(200).json({ message: "That character does not exist!" });
      } else {
        res.status(200).json(wantedCharacterData[0]);
      }
    } catch (ParsingError) {
      console.error(ParsingError);
      res.status(500).json({ message: "Failed to parse data." });
    }
  });
});

// PUT /characters/:id ==> Update a character by ID

app.put("/characters/:id", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file!" });
      return;
    } else {
      try {
        const characterData = JSON.parse(data);
        const updatedCharacter = {
          id: +req.params.id,
          ...req.body,
        };
        let found = false;
        for (let i = 0; i < characterData.characters.length; i++) {
          if (characterData.characters[i].id === +req.params.id) {
            characterData.characters[i] = updatedCharacter;
            found = true;
          }
        }
        if (found) {
          fs.writeFile(
            "user.json",
            JSON.stringify(characterData, null,2),
            (err) => {
              if (err) {
                res.status(500).json({ message: "Error writing file !" });
                return;
              } else {
                res.status(200).json(updatedCharacter);
              }
            }
          );
        } else {
          characterData.characters.push(updatedCharacter);
          fs.writeFile(
            "user.json",
            JSON.stringify(characterData, null,2),
            "utf-8",
            (err) => {
              if (err) {
                res.status(500).json({ message: "Error writing file!" });
              } else {
                res.status(201).json(updatedCharacter);
              }
            }
          );
        }
      } catch (ParsingError) {
        console.error(ParsingError);
        res.status(500).json({ message: "Failed to parse data !" });
      }
    }
  });
});

app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
