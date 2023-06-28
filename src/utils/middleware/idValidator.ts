import { NextFunction, Request, Response } from 'express'
import { Model } from 'mongoose'

export const IDValidator = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const countryID: number | string = req.params.id

        const country = await Model.findById(countryID)
        if (!country) throw new Error('Invalid country / ID')
    } catch (error) {
        return res.status(500).json({ error })
    }

    next()
}

