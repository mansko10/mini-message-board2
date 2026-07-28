const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.getIndex);
router.get("/messages", (req, res) => res.redirect("/"));
router.get("/messages/:id", controller.getMessage);
router.get("/new", controller.getNewMessageForm);
router.post("/new", controller.postNewMessage);

module.exports = router;
