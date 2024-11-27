import express, { Express } from 'express'
import mongoose from 'mongoose'

const app: Express = express() 
const port = process.env.PORT || 3001 // Default port to listen

app.use(express.json()) // To parse incoming requests with JSON payloads

const mongoURI: string = 'mongodb+srv://sajit:LGqiU3ZYZPfJEoKT@mindfulaboutmoney.qq3ng.mongodb.net/' // connection string to MongoDB

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

app.use