import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
 
app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);
 
app.listen(8000, () => console.log('Server running at port 8000'));

// Nodemon has to be run this way when it is installed locally using --save-dev
// ./node_modules/nodemon/bin/nodemon.js index