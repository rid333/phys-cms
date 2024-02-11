import { CollectionConfig } from "payload/types";
import { slateEditor } from "@payloadcms/richtext-slate";

export const Activities: CollectionConfig = {
    slug: 'activities',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'date',
            label: 'Date',
            type: 'date',
            required: true,
        },
        {
            name: 'time',
            label: 'Time',
            type: 'text',
            defaultValue: 'Cth: 12.00 WITA',
            required: true,
        },
        {
            name: 'location',
            label: 'Location',
            type: 'text',
            required: true,
        },
        {
            name: 'description',
            label: 'Description',
            type: 'richText',
            required: true,
            editor: slateEditor({
                admin: {
                    elements: [
                        'h1',
                        'h2',
                        'h3',
                        'h4',
                        'h5',
                        'blockquote',
                        'ul',
                        'ol',
                        'upload'
                    ],
                    leaves: [
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                        'underline'
                    ]
                }
            })
        }
    ]
}