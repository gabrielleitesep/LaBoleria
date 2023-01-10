import joi from "joi";
import {connectionDB} from "../db/db.js";
import dayjs from "dayjs";

const ordersJOI = joi.object({
    clientId:  joi.number().required(),
    cakeId:  joi.number().required(),
    quantity: joi.number().required().min(1).max(5)
})

export async function postOrder(req, res){

    const {clientId, cakeId, quantity} = req.body
    const validacao = ordersJOI.validate({ clientId, cakeId, quantity }, { abortEarly: false })

    if (validacao.error) {
        const erros = validacao.error.details.map((d) => d.message)
        res.status(422).send(erros);
        return
    }

    const clientExist = await connectionDB.query('SELECT * FROM clients WHERE id = $1', [clientId]);

    if(!clientExist.rows[0]) {
        return res.sendStatus(404);
    };
    const cakeExist = await connectionDB.query('SELECT * FROM cakes WHERE id = $1', [cakeId]);

    if(!cakeExist.rows[0]) {
        return res.sendStatus(404);
    };

    if(quantity < 0 || quantity > 5){
        return res.sendStatus(400);
    }

    const totalPrice = (cakeExist.rows[0].price) * quantity;
    const createdAt = dayjs().format('YYYY-MM-DD');

    try{
        await connectionDB.query(`INSERT INTO orders("clientId", "cakeId", quantity, "totalPrice", "createdAt") VALUES($1, $2, $3, $4, $5)`, [clientId, cakeId, quantity, totalPrice, createdAt]);
        return res.sendStatus(201);

    }catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

export async function getOrders(req, res){

}

export async function getOrdersId(req, res){

}