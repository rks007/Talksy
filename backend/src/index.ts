import express from 'express';
import http from "http"
import cors from "cors";
import { WebSocketServer, WebSocket } from "ws";


const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const wss = new WebSocketServer({ server });

interface User {
    name: string;
    socket: WebSocket;
    room: string;
}

let allSockets: User[] = [];

app.get('/create', (req, res) => {
    res.send('http server is running');
})


wss.on("connection", (socket) => {

    socket.on("message", (message) => {
        const parsedMessage = JSON.parse(message.toString());

        if(parsedMessage.type === "create"){
            // Check if the room already exists
            const existingRoom = allSockets.find((user) => user.room == parsedMessage.payload.room);

            if(existingRoom){
                socket.send("Room already exists");
                return;
            }

            allSockets.push({
                name: parsedMessage.payload.name,
                socket: socket,
                room: parsedMessage.payload.room
            })
            console.log(`User ${parsedMessage.payload.name} created room ${parsedMessage.payload.room}`);
        }
        if(parsedMessage.type === "join"){
            //check if the room exists
            const existingRoom = allSockets.find((user) => user.room === parsedMessage.payload.room);
            if(!existingRoom){
                socket.send("Room does not exist");
                return;
            }
            allSockets.push({
                name: parsedMessage.payload.name,
                socket: socket,
                room: parsedMessage.payload.room
            })
            console.log(`User ${parsedMessage.payload.name} joined room ${parsedMessage.payload.room}`);
            
        }
        if(parsedMessage.type === "chat"){
            const currentUserwithSameRoom = allSockets.find((user) => user.socket === socket);
            allSockets.forEach((user) => {
                if(currentUserwithSameRoom?.room === user.room){
                    user.socket.send(parsedMessage.payload.message)
                }
            })
        }
    })

    socket.on("close", () => {
        allSockets = allSockets.filter((user) => socket !== user.socket);
        //length of allSockets
        console.log(`Number of connected users: ${allSockets.length}`);
    })
})




const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});