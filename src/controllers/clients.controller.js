import joi from "joi";
import {connectionDB} from "../db/db.js";

const clientsJOI = joi.object({
    name: joi.string().required().min(1),
    address: joi.string().required().min(1),
    phone: joi.string().required().min(10).max(11)
})


export async function postClients(req, res){

}

export async function getClientsOrders(req, res){

}