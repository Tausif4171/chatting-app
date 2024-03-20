const io = require('socket.io')(4000)

io.on('connection', socket => {
    socket.emit('send-message', 'Hello, world')
})