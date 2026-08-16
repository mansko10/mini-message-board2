const { body } = require("express-validator");

const validateMessage = [
  body("author")
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage("Author name length must be between 1 and 30 characters."),
  body("message")
    .trim()
    .isLength({ min: 1, max: 255 })
    .withMessage("Message length must be between 1 and 255 character."),
];

module.exports = { validateMessage };
