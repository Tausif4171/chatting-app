const socket = io('http://localhost:4000')

socket.on('send-message', data => {
    console.log(data)
})