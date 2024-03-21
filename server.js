const io = require('socket.io')(4000)

const users = {}
console.log({ users })

io.on('connection', socket => {
    console.log('a user connected')
    // socket.emit('send-message', 'Hello, world')
    socket.on('send-chat-message', message => {
        console.log(message)
        socket.broadcast.emit('send-message', message)
    })

    socket.on('new-user', user => {
        users[socket.id] = user
        socket.broadcast.emit('user-connected', user)
    })
})