import { NextFunction, Request, Response } from 'express';
import { param, validationResult } from 'express-validator';

export const IDValidator = [
    param('id').isMongoId().withMessage('ID not working. Please check it'),

    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req).array()
        if (error.length > 0) {
            return res.status(400).json({ error: (error.map(e => e.msg)) })
        }
        next()
    }

]

