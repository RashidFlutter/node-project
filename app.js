import dotenv from "dotenv"
import express from 'express';

import urlApi from './routes/url_api.js';




// import pg from 'pg';

// import WebSocket, { WebSocketServer } from 'ws';
dotenv.config()



const app = express();
app.use(express.static('public'));

// const client = new pg.Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'Aarashid@1',
//   port: 5432, // or the port that your PostgreSQL instance is using
// });

// client.connect().then(()=>{
//   console.log("Postgre Connected");
// })

app.use(express.json());
app.use('/getUrlandVersion',urlApi)

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI);
    // console.log("Connected to db",);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`),

    );
  } catch (error) {
    console.log("----------- error", error);
  }
};
start();