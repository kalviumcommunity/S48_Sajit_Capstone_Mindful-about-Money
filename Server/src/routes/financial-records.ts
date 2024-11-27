import express, { Request, Response } from 'express'
import FinancialRecordModel from '../schema/financial-record'

// Define a route handler for the default home page
const router = express.Router()