import http from 'http'
import express from 'express'
import cors from 'cors'
import { Server, LobbyRoom } from 'colyseus'
import { monitor } from '@colyseus/monitor'
import { RoomType } from '../types/Rooms'

import { publicRoom } from './rooms/publicRoom'

const port = Number(process.env.PORT || 2567)
const app = express()

app.use(cors())
app.use(express.json())

const server = http.createServer(app)
const gameServer = new Server({
  server,
})

// register room public and lobby room
gameServer.define(RoomType.LOBBY, LobbyRoom)
gameServer.define(RoomType.PUBLIC, publicRoom, {
  name: 'Public Lobby',
  description: 'For making friends and reduce depression',
  password: null,
  autoDispose: false,
})
gameServer.define(RoomType.CUSTOM, publicRoom).enableRealtimeListing()

// register colyseus monitor AFTER registering your room handlers
app.use('/colyseus', monitor())

gameServer.listen(port)
console.log(`Listening on ws://localhost:${port}`)
