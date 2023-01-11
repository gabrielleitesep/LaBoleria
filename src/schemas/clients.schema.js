import joi from "joi";

export const clientsJOI = joi.object({
    name: joi.string().required().min(1),
    address: joi.string().required().min(1),
    phone: joi.string().required().min(10).max(11)
})
