import { 
  readCharactersFile, 
  writeCharactersFile 
} from '../services/fileService.js';

export const getAllCharacters = async (req, res, next) => {
  try {
    const data = await fileService.readCharactersFile();
    res.json(data.characters);
  } catch (error) {
    next(error);
  }
};

export const getCharacterById = async (req, res, next) => {
  try {
    const characterId = parseInt(req.params.id);
    const data = await fileService.readCharactersFile();
    const character = data.characters.find((c) => c.id === characterId);

    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.json(character);
  } catch (error) {
    next(error);
  }
};

export const createCharacter = async (req, res, next) => {
  try {
    const data = await fileService.readCharactersFile();
    const newCharacter = {
      id:
        data.characters.length > 0
          ? Math.max(...data.characters.map((c) => c.id)) + 1
          : 1,
      ...req.body,
    };

    data.characters.push(newCharacter);
    await fileService.writeCharactersFile(data);

    res.status(201).json(newCharacter);
  } catch (error) {
    next(error);
  }
};

export const updateCharacter = async (req, res, next) => {
  try {
    const characterId = parseInt(req.params.id);
    const data = await fileService.readCharactersFile();
    const characterIndex = data.characters.findIndex(
      (c) => c.id === characterId
    );

    const updatedCharacter = {
      id: characterId,
      ...req.body,
    };

    if (characterIndex === -1) {
      data.characters.push(updatedCharacter);
      await fileService.writeCharactersFile(data);
      return res.status(201).json(updatedCharacter);
    } else {
      data.characters[characterIndex] = updatedCharacter;
      await fileService.writeCharactersFile(data);
      return res.json(updatedCharacter);
    }
  } catch (error) {
    next(error);
  }
};

export const deleteCharacter = async (req, res, next) => {
  try {
    const characterId = parseInt(req.params.id);
    const data = await fileService.readCharactersFile();
    const initialLength = data.characters.length;

    data.characters = data.characters.filter((c) => c.id !== characterId);

    if (data.characters.length === initialLength) {
      return res.status(404).json({ message: "Character not found" });
    }

    await fileService.writeCharactersFile(data);
    res.json({ message: "Character deleted successfully" });
  } catch (error) {
    next(error);
  }
};
