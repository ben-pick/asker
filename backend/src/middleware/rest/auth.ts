import { verifyToken} from "../../utils/token"
import { NextFunction, Request, Response } from "express";

export default function validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
     const decoded = verifyToken(token);
     req.user = decoded;
     return next();
    } catch (error) {
     return res.status(401).json({ error: 'Invalid token' });
    }
};