import { RequestHandler } from 'express';
import Order from '../models/order';

export const getAllOrders: RequestHandler = async (req, res, next) => {
    try {
        const orders = await Order.find();

        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
};

// Delete, update, and add orders
