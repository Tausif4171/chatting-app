const io = require('socket.io')(4000)

const users = {}
console.log({ users })

io.on('connection', socket => {
    console.log('a user connected')
    // socket.emit('send-message', 'Hello, world')
    socket.on('new-user', user => {
        users[socket.id] = user
        socket.broadcast.emit('user-connected', user)
    })
    socket.on('send-chat-message', message => {
        console.log(message)
        socket.broadcast.emit('send-message', { message: message, name: users[socket.id] })
    })

    socket.on('disconnect', () => {

        socket.broadcast.emit('user-disconnected', users[socket.id])
        delete users[socket.id]
    })

})