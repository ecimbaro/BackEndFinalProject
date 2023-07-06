import { NextFunction, Request, Response } from 'express';
import { param, validationResult } from 'express-validator';


export const prefixValidator = [
    param('country')
        .isString().withMessage('El parámetro "country" debe ser una cadena de texto')
        .isLength({ min: 2, max: 2 }).withMessage('El parámetro "country" debe tener 2 caracteres')
        .notEmpty().withMessage('El parámetro "country" no debe estar vacio'),

    (req: Request, res: Response, next: NextFunction) => {
        const error = validationResult(req).array()
        if (error.length > 0) {
            return res.status(400).json({ error: (error.map(e => e.msg)) })
        }
        next();
    }
];
