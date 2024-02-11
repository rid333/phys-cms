import { CollectionConfig } from "payload/types";

export const Carousel: CollectionConfig = {
    slug: "carousel",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'carouselImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        }
    ]
}