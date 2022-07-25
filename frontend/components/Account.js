// import NavLink from './Link'
import React from 'react';
import { useUser } from './User';
import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import Link from 'next/link';
import gql from 'graphql-tag';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';
import styled from 'styled-components';
import OrderStyles from './styles/OrderStyles';
import SubHeader from '../components/SubHeader';
import DeleteUser from './DeleteUser'; 

const SINGLE_ORDER_QUERY = gql`
	query SINGLE_ORDER_QUERY($id: ID!) {
		order(id: $id) {
			id
			charge
			total
			createdAt
			user {
				id
			}
			items {
				id
				title
				description
				price
				image
				quantity
			}
		}
	}
`;


const CURRENT_USER_QUERY = gql`
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

const StyledLinked = styled.div`

  	a {
    	color: ${props => props.theme.black};
  	}

  	a:hover {
    	color: ${props => props.theme.black};
    	text-decoration: none;
  	}

`;

export default function Account({ id }) {
	const user = useUser();

	const { data, error, loading } = useQuery(CURRENT_USER_QUERY, {
        variables: {
            id
        },
    });

	console.log(data)

	if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
		
	return (
		<StyledLinked>
			{/* <Query query={CURRENT_USER_QUERY} variables={{ id: this.props.id }}> */}
				{/* {({ data, error, loading }) => {
					if (error) return <Error error={error} />;
					if (loading) return <p>Loading</p>;
					const user = data.me;
					const me = data ? data.me : null; */}
						
							<div>
								<OrderStyles data-test="user">
									<p>
										<span>User ID:</span> 
										<span>{data?.authenticatedItem?.id}</span>
									</p>
									<p>
										<span>Email:</span>
										<span>{data?.authenticatedItem?.email}</span>
									</p>

									<p>
										<span>Account Action:</span>
										<span>
											<a><DeleteUser id={data?.authenticatedItem?.id}>Delete Account</DeleteUser></a>
										</span>
									</p>			
								</OrderStyles>
							</div>
						
				{/* }} */}
				
			{/* </Query> */}
		</StyledLinked>
	);
}