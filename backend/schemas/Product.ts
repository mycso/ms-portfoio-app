import { integer, relationship, select, text } from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';

export const Product = list({
    ui: {
        listView: {
            initialColumns: ['name', 'description', 'photo', 'photo2', 'photo3', 'photo4']
        }
    },

    // TODO
    access: {
        create: isSignedIn,
        read: rules.canReadProducts,
        update: rules.canManageProducts,
        delete: rules.canManageProducts,
    },

    fields: {
        name: text({ isRequired: true }),
        description: text({
            ui: {
                displayMode: 'textarea',
            },
        }),
        link: text({ isRequired: false }),
        photo: relationship({
            ref: 'ProductImage.product',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo2: relationship({
            ref: 'ProductImage.product2',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo3: relationship({
            ref: 'ProductImage.product3',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        photo4: relationship({
            ref: 'ProductImage.product4',
            ui: {
                displayMode: 'cards',
                cardFields: ['image', 'altText'],
                inlineCreate: { fields: ['image', 'altText'] },
                inlineEdit: { fields: ['image', 'altText'] },
            }
        }),
        status: select({
            options: [
                { label: 'Draft', value: 'DRAFT' },
                { label: 'Available', value: 'AVAILABLE' },
                { label: 'Unavailable', value: 'UNAVAILABLE' },
            ],
            defaultValue: 'DRAFT',
            ui: {
                displayMode: 'segmented-control',
                createView: { fieldMode: 'hidden' },
            }
        }),
        user: relationship({
            ref: 'User.products',
            defaultValue: ({ context }) => ({
                connect: { id: context.session.itemId },
            }),
        }),
    },
});