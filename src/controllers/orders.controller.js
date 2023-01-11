import {connectionDB} from "../db/db.js";
import dayjs from "dayjs";

export async function postOrder(req, res){

    const {clientId, cakeId, quantity} = req.body
    
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

    try{
        const allOrders = await connectionDB.query("SELECT * FROM orders;");
        
        if (!allOrders.rows[0]) {
            return res.status(400).send([]);
        }

    return res.send(allOrders.rows).status(200);

    }catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}

export async function getOrdersId(req, res){

    const { id } = req.params

    try{

        const orderById = await connectionDB.query('SELECT * FROM orders WHERE id = $1', [id]);
    
        if (!orderById.rows[0]) {
            return res.sendStatus(404);
        }

        const clientOrderId = await connectionDB.query('SELECT * FROM clients WHERE id = $1', [orderById.rows[0].clientId]);
        const cakeOrderId = await connectionDB.query('SELECT * FROM cakes WHERE id = $1', [orderById.rows[0].cakeId]);

        const ordersData = {
            client: {
                id: clientOrderId.rows[0].id,
                name: clientOrderId.rows[0].name,
                address: clientOrderId.rows[0].address,
                phone: clientOrderId.rows[0].phone,
            },
            cake: {
                id: cakeOrderId.rows[0].id,
                name: cakeOrderId.rows[0].name,
                price: cakeOrderId.rows[0].price,
                description: cakeOrderId.rows[0].description,
                image: cakeOrderId.rows[0].image,
            },
            orderId: orderById.rows[0].id,
            createdAt: orderById.rows[0].createdAt,
            quantity: orderById.rows[0].quantity,
            totalPrice: orderById.rows[0].totalPrice
        }

    return res.status(200).send(ordersData);

    }catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
}