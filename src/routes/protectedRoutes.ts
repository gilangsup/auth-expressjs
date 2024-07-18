import { Router, Request, Response } from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.get('/protected', authMiddleware, (req: Request, res: Response) => {
    res.status(200).json({ message: 'This is a protected route', userId: req.userId });
});

export default router;
