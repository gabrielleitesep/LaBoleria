import joi from "joi";

export const ordersJOI = joi.object({
    clientId:  joi.number().required(),
    cakeId:  joi.number().required(),
    quantity: joi.number().required().min(1).max(5)
})