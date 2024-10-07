import express from "express";
import { UserController } from "../../controllers/rest/UserController";
import UserService from "../../services/UserService";
import parser from "body-parser";
const jsonParser = parser.json()

const router = express.Router();

const controller = new UserController(new UserService());
router.post("/api/login", jsonParser,async (req,res,next) => {await controller.login(req,res,next) });
router.post("/api/register",jsonParser, async (req,res,next) => { await controller.register(req,res,next) });

export default router;
