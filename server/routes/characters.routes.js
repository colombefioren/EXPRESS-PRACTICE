const express = require("express");
const router = express.Router();
const charactersController = require("../controllers/characters.controller");

router.get("/", charactersController.getAllCharacters);
router.get("/:id", charactersController.getCharacterById);
router.post("/", charactersController.createCharacter);
router.put("/:id", charactersController.updateCharacter);
router.delete("/:id", charactersController.deleteCharacter);

module.exports = router;
