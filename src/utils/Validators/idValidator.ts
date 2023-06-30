import { NextFunction, Request, Response } from 'express';
import { param, validationResult } from 'express-validator';

export const IDValidator = [
    param('id').notEmpty().withMessage('Please enter an ID'),

    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req)
        if (!error) {
            res.status(400).json({ error: error })
        }
        next()
    }

]

