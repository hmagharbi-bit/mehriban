import { type SchemaTypeDefinition } from "sanity";
import { product } from "@/sanity/schemas/product";
import { order } from "@/sanity/schemas/order";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [product, order],
};
