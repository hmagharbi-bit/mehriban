import { client } from "./client";

export async function createOrder(orderData: Record<string, unknown>) {
    try {
        const result = await client.create({
            _type: "order",
            ...orderData,
            status: "pending",
            createdAt: new Date().toISOString(),
        });
        return result;
    } catch (error) {
        console.error("Sanity order creation error:", error);
        throw error;
    }
}
