import { Request, Response } from 'express';

const routeError = (req: Request, res: Response) => {
    res.status(400).json({ message: ` Route Error: ${req.route} with ${req.method} not found. Check it` });
}

export default routeError;