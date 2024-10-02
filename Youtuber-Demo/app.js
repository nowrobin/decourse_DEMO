const express = require('express')

const app = express()
app.listen(1234)


const userDemo = require('./routes/users')
const channelDemo = require('./routes/channels')

app.use('/',userDemo)
app.use('/channels',channelDemo)