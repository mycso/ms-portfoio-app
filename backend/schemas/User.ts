import { list } from "@keystone-next/keystone/schema";
import { text, password, relationship } from "@keystone-next/fields";
import { isSignedIn, permissions, rules } from "../access";
export const User = list({
    access: {
        create: () => true,
        read: rules.canManageUsers,
        update: rules.canManageUsers,
        // Only users with the permissions can delete and update themselves
        delete: isSignedIn,
    },
    ui: {
        //hide the backend UI from regular users
        hideCreate: args => !permissions.canManageUsers(args),
        hideDelete: args => !permissions.canManageUsers(args),
    },
    fields: {
        name: text({ isRequired: true }),
        email: text({ isRequired: true, isUnique: true }),
        password: password(),
        role: relationship({
            ref: 'Role.assignedTo',
            access: {
                create: permissions.canManageUsers,
                update: permissions.canManageUsers,
            }
        }),
        products: relationship({
            ref: 'Product.user',
            many: true,

        }),
    },
});