import { CollectionConfig } from "payload/types";

export const Staffs: CollectionConfig = {
    slug: "people",
    access: {
        read: () => true,
    },
    admin: {
        useAsTitle: "name",
    },
    fields: [
        {
            name: "name",
            label: "Nama",
            type: "text",
            required: true,
        },
        {
            name: "staffType",
            label: "Staff Type",
            type: "radio",
            options: [
                { label: "Academic Staff", value: "academic-staff" },
                { label: "Non-Academic Staff", value: "non-academic-staff" },
            ],
            required: true,
        },
        {
            name: "position",
            label: "Position",
            type: "text",
            required: true,
        },
        {
            name: "photo",
            label: "Photo",
            type: "upload",
            relationTo: "media",
            required: true,
        },
        {
            name: "biography",
            label: "Biography",
            type: "textarea",
        },
        {
            name: "education",
            label: "Education",
            type: "array",
            minRows: 1,
            fields: [
                {
                    name: "degree",
                    label: "Degree",
                    type: "text",
                },
                {
                    name: "institution",
                    label: "Institution",
                    type: "text",
                },
                {
                    name: "year",
                    label: "Year",
                    type: "text",
                },
            ],
        },
        {
            name: "researchInterest",
            label: "Research Interest",
            type: "radio",
            options: [
                { label: "Theoretical and Computation", value: "Theoretical and Computation" },
                { label: "Electronics and Instrumentation", value: "Electronics and Instrumentation" },
                { label: "Material and Energy", value: "Material and Energy" },
                { label: "Optics and Spectroscopy", value: "Optics and Spectroscopy" },
                { label: "Tidak Ada", value: "tidak-ada" },
            ],
        },
        {
            label: "Contact",
            type: "collapsible",
            fields: [
                {
                    name: "email",
                    type: "text",
                    required: true,
                },
                {
                    name: "phone",
                    type: "text",
                    required: true,
                },
                {
                    name: "address",
                    type: "text",
                }
            ]
        },
        {
            name: "cvLink",
            label: "CV Link",
            type: "text",
        },
        {
            name: "staffHandbookLink",
            label: "Handbook Link",
            type: "text",
        },
        {
            name: "scopusLink",
            label: "Scopus Link",
            type: "text",
        },
        {
            label: "Publication",
            type: "collapsible",
            fields: [
                {
                    name: "publication",
                    label: "Publication",
                    type: "array",
                    fields: [
                        {
                            name: "title",
                            label: "Judul",
                            type: "text",
                        }
                    ]
                }
            ]
        }
    ]
}