require("dotenv").config();
import app from './app'
import db from './config';

/* The above code is a simple server that connects to a database and listens on a port. */
const PORT = process.env.PORT || 3001;

const server = (()=>{
    try {
        db()
        app.listen(PORT,  ()=>{console.log(`Listen in ${PORT}`);})
    } catch (error) {
        console.log('error :>> ', error);
    }
});

server();