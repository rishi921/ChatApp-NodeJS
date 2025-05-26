//This is the node server which wwill handle sockets io connections
const io = require('socket.io')(8000)
const users = {};

io.on('connection', socket => {
    socket.on('New-user-joined', name => {
        console.log("New User", name);
        users[socket.id] = name;
        socket.broadcast.emit('User-joined', name);
    });
    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: user[socket.id] });
    });
})