import TokenUser from "../interfaces/TokenUser";
import jwt from "jsonwebtoken"
export function verifyToken(token: string): TokenUser {
    return jwt.verify(token, process.env.SECRET_KEY as string) as TokenUser;
}

export function signToken(user: TokenUser): string {
    return jwt.sign(user, process.env.SECRET_KEY as string, {
        expiresIn: '1h',
    });
       
}