import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    id: number;
}

const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers['authorization'];
    if (!token) {
        res.status(401).json({ error: 'No token provided' });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
        if (err) {
            res.status(500).json({ error: 'Failed to authenticate token' });
            return;
        }
        req.userId = (decoded as JwtPayload).id;
        next();
    });
};

export default authMiddleware;
