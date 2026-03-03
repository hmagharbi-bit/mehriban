import { defineField, defineType } from "sanity";

export const order = defineType({
    name: "order",
    title: "Commande",
    type: "document",
    fields: [
        defineField({
            name: "fullName",
            title: "Nom complet",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "phone",
            title: "Téléphone",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "wilaya",
            title: "Wilaya",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "commune",
            title: "Commune",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "address",
            title: "Adresse exacte",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "products",
            title: "Produits",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        { name: "product", type: "reference", to: [{ type: "product" }] },
                        { name: "quantity", type: "number" },
                    ],
                },
            ],
            validation: (Rule) => Rule.required().min(1),
        }),
        defineField({
            name: "totalPrice",
            title: "Prix Total",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "status",
            title: "Statut",
            type: "string",
            options: {
                list: [
                    { title: "En attente", value: "pending" },
                    { title: "Confirmé", value: "confirmed" },
                    { title: "Expédié", value: "shipped" },
                    { title: "Livré", value: "delivered" },
                ],
            },
            initialValue: "pending",
        }),
        defineField({
            name: "createdAt",
            title: "Date de commande",
            type: "datetime",
            initialValue: () => new Date().toISOString(),
        }),
    ],
});
