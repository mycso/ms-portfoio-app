import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import gql from "graphql-tag";
// import DisplayError from "./ErrorMessage";
import Product from "./Product";

const ItemsList = styled.div`
	display: grid;
	grid-template-columns: auto auto auto auto;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	@media (max-width: 830px) {
		grid-template-columns: 1fr 1fr;
		grid-gap: 0%;
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;

export const ALL_PRODUCTS_QUERY = gql`
    query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int = 4) {
        allProducts(first: $first, skip: $skip) {
            id
            name
            photo {
                id
                image {
                publicUrlTransformed
                }
            }
        }
    }
`;

export default function SomeProduct() {

    const randomNumber = Math.floor(Math.random() * 20);

    const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY, {
        variables: {
            skip: randomNumber 
        },
    });
    

    console.log(data, error, loading);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    
    return (

        <div>
            <ItemsList>
                {data?.allProducts?.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </ItemsList>
        </div>
    );
}