import { GlobalConfig } from "payload/types";

export const ModuleHandbook: GlobalConfig = {
    slug: "module-handbook",
    access: {
        read: () => true,
    },
    fields: [
        {
            type: 'collapsible',
            label: 'Semester 1',
            fields: [
                {
                    name: 'semester1',
                    label: 'Semester 1',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
        {
            type: 'collapsible',
            label: 'Semester 2',
            fields: [
                {
                    name: 'semester2',
                    label: 'Semester 2',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
        {
            type: 'collapsible',
            label: 'Semester 3',
            fields: [
                {
                    name: 'semester3',
                    label: 'Semester 3',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
        {
            type: 'collapsible',
            label: 'Semester 4',
            fields: [
                {
                    name: 'semester4',
                    label: 'Semester 4',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
        {
            type: 'collapsible',
            label: 'Semester 5',
            fields: [
                {
                    name: 'semester5',
                    label: 'Semester 5',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
        {
            type: 'collapsible',
            label: 'Semester 6',
            fields: [
                {
                    name: 'semester6',
                    label: 'Semester 6',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        {
                            name: 'module',
                            type: 'text',
                            label: 'Module Name',
                        },
                        {
                            name: 'link',
                            type: 'text',
                            label: 'Module Link',
                        }
                    ]
                },
            ]
        },
    ]
}