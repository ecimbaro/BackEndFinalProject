import { param, body } from 'express-validator';

export const prefixValidator = () => {
    [
        param("id").notEmpty().withMessage("Prefix 'AR, VE, etc' is required"),
    ];

}


