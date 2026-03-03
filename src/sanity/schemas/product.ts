import { defineField, defineType } from "sanity";

export const product = defineType({
    name: "product",
    title: "Produit",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Nom du produit",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "price",
            title: "Prix (DZD)",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "category",
            title: "Catégorie",
            type: "string",
            options: {
                list: [
                    { title: "Parfums", value: "parfums" },
                    { title: "Huiles", value: "huiles" },
                    { title: "Coffrets", value: "coffrets" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "stock",
            title: "Stock",
            type: "number",
            validation: (Rule) => Rule.required().min(0),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "notesTop",
            title: "Notes de Tête",
            type: "string",
        }),
        defineField({
            name: "notesHeart",
            title: "Notes de Cœur",
            type: "string",
        }),
        defineField({
            name: "notesBase",
            title: "Notes de Fond",
            type: "string",
        }),
        defineField({
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image", options: { hotspot: true } }],
            validation: (Rule) => Rule.required().min(1),
        }),
    ],
});
