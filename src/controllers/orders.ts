import { RequestHandler } from 'express';
import OrderModel from '../models/order';
import { NumberSchemaDefinition, isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const getAllOrders: RequestHandler = async (req, res, next) => {
    try {
        const orders = await OrderModel.find();

        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

export const getOrderById: RequestHandler = async (req, res, next) => {
    const orderId = req.params.orderId;

    try {
        if (!isValidObjectId(orderId)) throw createHttpError(400, 'Order ID is invalid.');

        const order = await OrderModel.findById(orderId);

        if (!order) throw createHttpError(404, 'Order not found.');

        res.status(200).json(order);
    } catch (error) {
        next(error);
    }
};

interface Product {
    name: string;
    seller?: string;
    quantity: number;
    unitPrice: number;
    price: number;
}
interface createOrderBody {
    customerName: string;
    customerAddress?: string;
    city?: string;
    listOfProducts: [Product?];
    delivery: boolean;
    deliveryPrice?: number;
}

export const createOrder: RequestHandler<unknown, unknown, createOrderBody, unknown> = async (
    req,
    res,
    next,
) => {
    const customerName = req.body.customerName;
    const customerAddress = req.body.customerAddress;
    const city = req.body.city;
    const listOfProducts = req.body.listOfProducts;
    const delivery = req.body.delivery;
    const deliveryPrice = req.body.deliveryPrice;

    // do the price calculation here (quant * unitprice)

    try {
        if (!customerName || listOfProducts.length === 0)
            throw createHttpError(400, 'Invalid input, information is missing');

        const newOrder = await OrderModel.create({
            customerName,
            customerAddress,
            city,
            listOfProducts,
            delivery,
            deliveryPrice,
        });

        res.status(201).json(newOrder);
    } catch (error) {
        next(error);
    }
};

export const updateOrder: RequestHandler = async (req, res, next) => {
    next();
};

export const deleteOrder: RequestHandler = async (req, res, next) => {
    next();
};
// Delete, update
