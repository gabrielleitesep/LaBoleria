import { connectionDB } from "../db/db.js";

export async function postCakes(req, res) {

    const { name, price, image, description } = req.body
   
    if (!name || !price || !image || !description) {
        return res.sendStatus(400);
    }

    try {
        await connectionDB.query(`INSERT INTO cakes ("name", "price", "image", "description") VALUES ($1, $2, $3, $4);`, [name, price, image, description])
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}