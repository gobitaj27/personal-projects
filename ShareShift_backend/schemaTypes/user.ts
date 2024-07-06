import { defineField, defineType } from 'sanity';

export const user = defineType({
    name: 'user',
    title: 'user',
    type: 'document',
    fields: [
        defineField({
            name: 'userName',
            title: 'userName',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'image',
            type: 'string'
        })
    ]
})