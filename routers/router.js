const { Router } = require("express");
const controller = require("../controllers/controller");
const { validateMessage } = require("../validators");

const router = Router();

router.get("/", controller.getIndex);
router.get("/messages", (req, res) => res.redirect("/"));
router.get("/messages/:id", controller.getMessage);
router.get("/new", controller.getNewMessageForm);
router.post("/new", validateMessage, controller.postNewMessage);

module.exports = router;
