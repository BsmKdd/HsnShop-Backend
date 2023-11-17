import express from 'express';
import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
} from '../controllers/orders';

const router = express.Router();

router.get('/', getAllOrders);

router.get('/:orderId', getOrderById);

router.post('/', createOrder);

router.patch('/:orderId', updateOrder);

router.delete('/:orderId', deleteOrder);

export default router;
