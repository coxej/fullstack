import { Sequelize } from "sequelize";
import db from "../config/database.js";
//import Product from "../models/productModel.js";
 
export const getAllProducts = async (req, res) => {
    try {
        // Built-in
        // const products = await Product.findAll();
        
        // Raw SQL Query
        const products = await db.query("SELECT id, title, price FROM products", {type: db.QueryTypes.SELECT});
        res.json(products);
    } catch (error) {
        res.json({ message: error.message });
    }

    // Different way of accomplishing whats above
    // Product.findAll().then( products => { res.json(products); } ).catch( error => { res.status(500).send(); } );
}
 
export const getProductById = async (req, res) => {
    try {
        // const product = await Product.findAll({
        //     where: {
        //         id: req.params.id
        //     }
        // });
        
        // Raw SQL Query
        const product = await db.query(`SELECT id, title, price FROM products WHERE id = ${req.params.id}`, {type: db.QueryTypes.SELECT});
        res.json(product[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createProduct = async (req, res) => {
    try {
        // await Product.create(req.body);
        
        // Raw SQL Query
        await db.query(`INSERT INTO products (title, price) VALUES (${req.body.title}, ${req.body.price})`, {type: db.QueryTypes.INSERT});
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteProduct = async (req, res) => {
    try {
        await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
