// import gql from "graphql-tag";
import { gql, useQuery } from "@apollo/client";

export const CURRENT_USER_QUERY = gql`
    query {
        authenticatedItem {
            ... on User {
                id
                email
                name
                role {
                    id
                    name
                    canManageProducts
                    canSeeOtherUsers
                    canManageUsers
                    canManageRoles
                    canManageCart
                    canManageOrders
                    canManageReviews
                }
            }
        }
    }
`;

export function useUser() {
    const { data } = useQuery(CURRENT_USER_QUERY);
    return data?.authenticatedItem;
}