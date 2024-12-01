import express, { Express } from 'express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import financialRecordRouter from './routes/financial-records'
import cors from 'cors'

dotenv.config() // Load environment variables from a .env file

// Create a new express application instance
const app: Express = express() 
const port = process.env.PORT || 3001 // Default port to listen

app.use(express.json()) // To parse incoming requests with JSON payloads
app.use(cors()) // Enable CORS for all requests

const mongoURI: string = process.env.MONGO_URI || '' // MongoDB URI from environment variables
// Check if the MongoDB URI is missing
if (!mongoURI) {
	console.error('Error: MongoDB URI is missing. Please check your environment variables. 👎🏽❌')
	process.exit(1)
}

// Define a route handler for the default home page
mongoose.connect(mongoURI)
	.then(() => {
		console.log('Connected to MongoDB 📦')
		app.listen(port, () => { 
			console.log(`Server is running on http://localhost:${port} 🚀`)
		})
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error, '❌')
	})

// Define a route handler for the financial records
app.use('/financial-records', financialRecordRouter)