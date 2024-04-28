import { slateEditor } from "@payloadcms/richtext-slate";
import { GlobalConfig } from "payload/types";

export const Survey: GlobalConfig = {
    slug: 'survey',
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
                        'upload',
                        'link'
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
