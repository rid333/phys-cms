import {CollectionConfig} from 'payload/types';

export const Appendix: CollectionConfig = {
    slug: 'appendix',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'category',
            label: 'Category',
            type: 'radio',
            options: [
                {label: 'Appendix', value: 'Appendix'},
                {label: 'Regulation', value: 'Regulation'},
                {label: 'Other', value: 'Other'}
            ],
        },
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