import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';


export const prefixValidator = [
    body('country').isString().isLength({ min: 2 }).notEmpty().withMessage('El parámetro "country" debe ser una cadena de texto y no puede estar vacio.'),

    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req);
        if (!error.isEmpty) {
            return res.status(400).json({ error: error });
        }
        next();
    }
];
