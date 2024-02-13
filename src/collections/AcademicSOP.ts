import {CollectionConfig} from 'payload/types';

export const AcademicSOP: CollectionConfig = {
    slug: 'academic-sop',
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
            name: 'url',
            label: 'Google Drive URL',
            type: 'text',
            required: true,
        },
        {
            name: 'directDownloadURL',
            label: 'Direct Download URL',
            type: 'text',
        }
    ],
}