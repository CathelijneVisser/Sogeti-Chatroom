import OpenAI from 'openai'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import http from 'http'
import cors from 'cors'
import express from 'express'

dotenv.config()

const app = express()

app.use(cors({
  origin: '*'
}))

const server = http.createServer(app)
const io = new Server(server, {
  cors: {
    origin: '*',
  }
})

const openai = new OpenAI({apiKey: process.env.OPENAI_API_KEY})

let conversationHistory = []
const historySize = 20 //20 is max amount of messages in history

io.on('connection', (client) => {
    console.log('New user connected')

    client.emit('history', conversationHistory)
    client.on('transcript', async(transcript, callback) => {
      console.log("question asked", transcript)
      try{
        while ( conversationHistory.length > historySize) {
          conversationHistory.shift()
        }
        conversationHistory.push({role: 'user', content: transcript})
        const completion = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: conversationHistory,
        })
        const response = completion.data.choices[0].message.content
        console.log(response)
        client.emit('response', response)
        callback()
        }catch (error) {
          console.error(error)
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
