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
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Prix (DZD)",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      title: "Image du produit",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Parfum", value: "parfum" },
          { title: "Musc", value: "musc" },
          { title: "Autre", value: "autre" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "En vedette",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
});