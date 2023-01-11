import joi from "joi";

export const cakesJOI = joi.object({
    name: joi.string().required().min(2),
    price: joi.number().required().min(0),
    image: joi.string().required().uri().min(1),
    description: joi.string().min(0).allow('').allow(null)
});
