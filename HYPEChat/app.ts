import app from './config/server.ts';
// import cors from 'cors';
import { Server } from 'socket.io';


const server = app.listen(3000, () => {
    console.log('');
    console.log('🚀 Server started 🚀');
    console.log('http://localhost:3000');
    console.log('');
});

export const socketio = new Server(server, { cors: { origin: '*' } });


socketio.on('connection', (socket) => {
    console.log('');
    console.log('😊 user connected 😊');
    console.log('');

    socket.on('disconnect', () => {
        console.log('');
        console.log('😊 user disconnect 😊');
        console.log('');
    });
});
