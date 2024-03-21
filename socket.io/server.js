import express, { response } from 'express'
import OpenAI from "openai"

const dotenv = require('dotenv')
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors= require('cors')

dotenv.config()

const app = express()

app.use(cors({
  origin: '*'
}))

const server = http.createServer(app)
const io = socketIo(server, {
  cors: {
    origin: '*',
  }
})

console.log(process.env.OPENAI_API_KEY)
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAI(configuration)

io.on('connection', (client) => {
    console.log('New user connected')

    client.on('transcript', (transcript) => {
      console.log("question asked", transcript)
      async function main() {
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: "You are a helpful assistant." }],
          model: "gpt-3.5-turbo",
        });
      
        console.log(completion.choices[0]);
      }
    })
  
    client.on('disconnect', () => {
      console.log('User disconnected')
    })
  })
  

const PORT = process.env.PORT || 5001

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
