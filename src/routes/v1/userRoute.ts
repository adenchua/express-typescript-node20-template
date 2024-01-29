/** <-- DELETE THIS FILE --> */
import express from "express";

import userController from "../../controllers/v1/userController";

const router = express.Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);

export default { router };
