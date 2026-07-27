const { Router } = require("express");
const controller = require("../controllers/controller");

const router = Router();

router.get("/", controller.getIndex);
router.get("/new", controller.getNewMessageForm);

module.exports = router;
