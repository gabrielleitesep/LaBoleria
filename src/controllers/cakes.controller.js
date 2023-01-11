import { getCakeByName, insertCake } from "../repositories/cake.repository.js";

export async function postCakes(req, res) {

    const { name, price, image, description } = req.body
   
    if (!name || !price || !image || !description) {
        return res.sendStatus(400);
    }

    try {
        const cakeNameExist = await getCakeByName(name);

        if (cakeNameExist.rows.length !== 0) {
            return res.status(409).send("Esse bolo já existe");
        }

        await insertCake(name, price, image, description);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }

}