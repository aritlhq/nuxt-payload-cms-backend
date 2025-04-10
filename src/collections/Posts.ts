import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
    slug: "posts",
    access: {
        read: () => true,
    },
    fields: [
       {
        name: "title",
        type: "text",
        required: true,
       },
       {
        name: "slug",
        type: "text",
        required: true,
        unique: true,
       },
       {
        name:"content",
        type: "richText",
        required: true,
       },
       {
        name: "featuredImage",
        type: "relationship",
        relationTo: "media",
        required: true,
       },
       {
        name: "author",
        type: "relationship",
        relationTo: "users",
        required: true,
       },
       {
        name: "status",
        type: "select",
        options: [
            {
                value: "draft",
                label: "Draft",
            },
            {
                value: "published",
                label: "Published",
            },
            {
                value: "archived",
                label: "Archived", 
            }
        ]
       },
       {
        name: "publishedDate",
        type: "date",
        required: true,
       }
    ]
}