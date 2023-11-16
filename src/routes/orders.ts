import express from 'express';
import { getAllOrders } from '../controllers/orders';

const router = express.Router();

router.get('/orders', getAllOrders);

export default router;
