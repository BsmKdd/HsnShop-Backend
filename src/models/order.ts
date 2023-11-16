import mongoose, { InferSchemaType, model } from 'mongoose';

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerName: { type: String, required: true },
    cutstomerAddress: { type: String },
    city: { type: String },
    listOfProducts: [
        {
            name: { type: String, required: true },
            seller: { type: String },
            quantity: { type: Number, required: true },
            unitPrice: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    delivery: { type: Boolean, required: true, default: false },
    deliveryPrice: { type: Number },
});

type Order = InferSchemaType<typeof orderSchema>;

export default model<Order>('Order', orderSchema);
