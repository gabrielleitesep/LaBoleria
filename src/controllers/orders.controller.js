import joi from "joi";
import {connectionDB} from "../db/db.js";

const ordersJOI = joi.object({
    quantity: joi.number().required().min(0).max(5)
})


export async function postOrder(req, res){

}

export async function getOrders(req, res){

}

export async function getOrdersId(req, res){
    
}