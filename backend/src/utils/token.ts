import TokenUser from "../interfaces/TokenUser";
import jwt from "jsonwebtoken"
export function verifyToken(token: string): TokenUser {
    return jwt.verify(token, 'secret-key') as TokenUser;
}

export function signToken(user: TokenUser): string {
    return jwt.sign(user, 'secret-key', {
        expiresIn: '1h',
    });
       
}