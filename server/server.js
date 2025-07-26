// GET /characters ==> Get all characters
// POST /characters ==> Create a new character
// GET /characters/:id ==> Get a character by ID
// PUT /characters/:id ==> Update a character by ID
// DELETE /characters/:id ==> Delete a character by ID

const express = require("express");
const app = express();
const fs = require("node:fs/promises");
const PORT = 3000;

app.use(express.json);

app.get("/", async (req, res) => {
  fs.readFile("user.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ message: "Error reading file!" });
      console.log("AYoo")
      return;
    } else {
      try {
        const characterData = JSON.parse(data);
        res.json(characterData);
        console.log(characterData)
      } catch (error) {
        console.error(error);
      }
    }
  });
});

app.listen(PORT, () => console.log(`Server running on the PORT ${PORT}`));
