// GET /characters ==> Get all characters
// POST /characters ==> Create a new character
// GET /characters/:id ==> Get a character by ID
// PUT /characters/:id ==> Update a character by ID
// DELETE /characters/:id ==> Delete a character by ID

const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 4000;

app.use(express.json());

app.get("/characters", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file!" });
      return;
    } else {
      try {
        console.log(data);
        const characterData = JSON.parse(data);
        res.json(characterData);
      } catch (error) {
        console.error(error);
      }
    }
  });
});

app.post("/characters", async (req, res) => {
  try {
    const data = await req.body;
    const newCharacter = JSON.parse(data);
    console.log(newCharacter);
    res.json(newCharacter);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
