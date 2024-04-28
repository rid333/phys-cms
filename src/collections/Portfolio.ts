import { CollectionConfig } from 'payload/types';

export const Portfolio: CollectionConfig = {
    slug: "portfolio",
    access: {
        read: function() { return true; },
    },
    fields: [
        {
            name: "semester",
            type: "text",
            label: "Semester",
        },
        {
            name: "portfolio",
            label: "Portfolio",
            type: "array",
            minRows: 1,
            fields: [
                {
                    name: "title",
                    label: "Title",
                    type: "text",
                },
                {
                    name: "link",
                    label: "Link",
                    type: "text",
                }
            ]
        }
    ]
}
