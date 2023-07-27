require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routerIndex = require('./routes/index');


 const app = express();
 app.use(cors());
 app.use(express.json());
app.use('/api/v1', routerIndex)

 app.listen(process.env.PORT_SERVER, () => console.log(`Server running in the port ${process.env.PORT_SERVER}`))
// const httpServer = http.createServer()
 
//  const io = new Server(httpServer, {
//     cors: true
//  })

//  io.on('connection', (socket) => {
//     console.log('conectado')

//     socket.on('mensaje', (msg) => {
//         console.log(msg)
//     })

//     socket.on('disconnect', () => {
//         console.log('desconectado')
//     })
//  })

// httpServer.listen(process.env.PORT_SERVER, () => console.log('server running in the port 3000'))
 