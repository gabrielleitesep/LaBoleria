import { connectionDB } from "../db/db.js"

export async function insertClients(name, address, phone) {
    return connectionDB.query(`INSERT INTO clients ("name", "address", "phone") VALUES ($1, $2, $3);`, [name, address, phone]);
}

export function getClientsById(id) {
    return connectionDB.query('SELECT * FROM clients WHERE id = $1', [id]);
}

export function getOrdersByClientId(id) {
    return connectionDB.query('SELECT * FROM orders WHERE "clientId" = $1', [id]);
}