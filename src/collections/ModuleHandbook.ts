import { CollectionConfig } from 'payload/types';

export const ModuleHandbook: CollectionConfig = {
    slug: "module-handbook",
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
            name: "module",
            label: "Module",
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
