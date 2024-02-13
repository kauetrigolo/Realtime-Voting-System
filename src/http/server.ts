import fastify from 'fastify'
import websocket from '@fastify/websocket'
import cookie from '@fastify/cookie'

import { createPoll } from './routes/create-poll'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './WS/poll-results'

const app = fastify()

app.register(cookie, {
    secret: "bololohaha",
    hook: "onRequest"
})

app.register(websocket)

app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
    console.log('Server started on http://localhost:3333')
})