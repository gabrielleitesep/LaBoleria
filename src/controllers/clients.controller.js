import { insertClients, getClientsById, getOrdersByClientId } from "../repositories/client.repository.js";

export async function postClients(req, res) {

    const { name, address, phone } = req.body

    if (!name || !address || !phone) {
        return res.sendStatus(400);
    }

    try {
        await insertClients(name, address, phone);
        res.sendStatus(201);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}

export async function getClientsOrders(req, res) {

        const {id} = req.params
        
        try {
            const clientById = await getClientsById(id);
        if (!clientById.rows[0]) {
            return res.status(404).send("O usuário não existe");
        }
    
        const ordersByClient = await getOrdersByClientId(id);
        if (!ordersByClient.rows[0]) {
            return res.status(404).send("O usuário não fez nenhum pedido");
        } 

        res.send(ordersByClient.rows);
        
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
}