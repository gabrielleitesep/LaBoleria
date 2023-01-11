import { connectionDB } from "../db/db.js";

export async function postClients(req, res) {

    const { name, address, phone } = req.body

    if (!name || !address || !phone) {
        return res.sendStatus(400);
    }

    try {
        await connectionDB.query(`INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3);`, [name, address, phone])
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getClientsOrders(req, res) {

        const {id} = req.params
        
        try {
            const clientById = await connectionDB.query('SELECT * FROM clients WHERE id = $1', [id]);
        if (!clientById.rows[0]) {
            return res.status(404).send("O usuário não existe");
        }
    
        const ordersByClient = await connectionDB.query('SELECT * FROM orders WHERE "clientId" = $1', [id]);
        if (!ordersByClient.rows[0]) {
            return res.status(404).send("O usuário não fez nenhum pedido");
        } 

        res.send(ordersByClient.rows);
        
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
}