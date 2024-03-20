const io = require('socket.io')(4000)

io.on('connection', socket => {
    console.log('a user connected')
    socket.emit('send-message', 'Hello, world')
    socket.on('send-chat-message', message => {
        console.log(message)
    })
})