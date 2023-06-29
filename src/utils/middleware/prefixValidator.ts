import { NextFunction, Request, Response } from 'express';

export const prefixValidator = (req: Request, res: Response, next: NextFunction) => {
    try {
        const {country} = req.params;
        console.log(country, 'MMM')

        if (!country) return res.status(400).json({ message: 'Country prefix is required' });
        
    } catch (error) {
        res.json({ message: error });

    }
    next()
}
