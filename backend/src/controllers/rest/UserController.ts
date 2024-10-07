import { NextFunction, Request, Response } from "express";
import UserService from "../../services/UserService";
import { newUserSchema } from "../../schemas/NewUser";
import { userCredentialsSchema } from "../../schemas/UserCredentials";
import { signToken} from "../../utils/token"
export class UserController {
  private service: UserService;
  constructor(service: UserService) {
    this.service = service;
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const existingUser = await userCredentialsSchema.validate(req.body);
      const user = await this.service.getUser(existingUser)
      const token = signToken({id: user.id})
      return res.status(200).send({
        token
      })
    } catch (e) {
      return res.status(401).send({
        message: "Invalid credentials",
      });
    }
  }
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const newUser = await newUserSchema.validate(req.body);
      await this.service.register(newUser);
    } catch (e) {
      res.status(409).send({
        message: "User already exists",
      });
    }
  }
}
