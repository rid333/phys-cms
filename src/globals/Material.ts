import { GlobalConfig } from "payload/types";
import { slateEditor } from "@payloadcms/richtext-slate";

export const Material: GlobalConfig = {
    slug: "material-dan-energi",
    access: {
        read: () => true,
    },
    fields: [
        {
            name: "content",
            type: "richText",
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
            }),
        },
        {
            name: "excerpt",
            label: "Penjelasan Singkat u/ Home Page",
            type: "textarea",
        },
        {
            name: "thesis",
            type: "array",
            fields: [
                {
                    name: "thesis_title",
                    type: "text",
                }
            ]
        },
    ],
}