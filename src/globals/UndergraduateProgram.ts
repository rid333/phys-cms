import { slateEditor } from "@payloadcms/richtext-slate";
import { GlobalConfig } from "payload/types";

export const UndergraduateProgram: GlobalConfig = {
    slug: 'undergraduate-program',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'content',
            label: 'Content',
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
            }),
        },
    ], 
}