import joi from "joi";
import { connectionDB } from "../db/db.js";

const cakesJOI = joi.object({
    name: joi.string().required().min(2),
    price: joi.number().required().min(0),
    image: joi.string().required().uri().min(1),
    description: joi.string().required().min(1)
});


export async function postCakes(req, res) {

    const { name, price, image, description } = req.body
    const validacao = cakesJOI.validate({ name, price, image, description }, { abortEarly: false })

    if (validacao.error) {
        const erros = validacao.error.details.map((d) => d.message)
        res.status(422).send(erros);
        return
    }

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