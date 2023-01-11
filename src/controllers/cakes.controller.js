import { connectionDB } from "../db/db.js";

export async function postCakes(req, res) {

    const { name, price, image, description } = req.body
   
    if (!name || !price || !image || !description) {
        return res.sendStatus(400);
    }

    try {
        const cakeNameExist = await connectionDB.query(`SELECT * FROM cakes WHERE name = $1`, [name]);

        if (cakeNameExist.rows.length !== 0) {
            return res.status(409).send("Esse bolo já existe");
        }

        await connectionDB.query(`INSERT INTO cakes ("name", "price", "image", "description") VALUES ($1, $2, $3, $4);`, [name, price, image, description])
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}