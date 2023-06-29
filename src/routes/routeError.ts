import { Request, Response } from 'express';

const routeError = (req: Request, res: Response) => {
    res.status(400).json({ message: ` Route Error: ${req.url} with ${req.method} not found. Please check it` });
}

export default routeError;