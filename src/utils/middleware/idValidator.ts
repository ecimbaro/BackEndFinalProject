import { NextFunction, Request, Response } from 'express'
import { Model } from 'mongoose'
import {param} from 'express-validator'


export const IDValidator = [
    param('id').notEmpty().withMessage('ID requerido')
]
