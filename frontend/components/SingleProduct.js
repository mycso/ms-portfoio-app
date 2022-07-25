
import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import gql from "graphql-tag";
import { useQuery } from '@apollo/client';
import DisplayError from "./ErrorMessage";
import Head from 'next/head';
import Link from 'next/link';
import SingleItemStyles from './styles/SingleItemStyles';
import DeleteProduct from './DeleteProduct';
import SliderImage from 'react-zoom-slider';
import { useUser } from './User';
import ItemStyles from './styles/ItemStyles';
import SomeProduct from "./SomeProduct";
import { StarsRating } from "stars-rating-react-hooks";

const Center = styled.div`
	text-align: center;
`;

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

const ItemRatingsList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 60px;
	max-width: ${props => props.theme.maxWidth};
	margin: 0 auto;
	text-align: left;
    margin-bottom: 50px;

	p{
		font-size: 1rem;
	}

	@media (max-width: 830px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;

		p {
    		font-size: 0.95rem;
		}
		
		a {
    		font-size: 1.2rem;
		}
	}
	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		grid-gap: 0%;
	}
`;


const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY ($id: ID!){
        Product(where: { id: $id }) {
            name
            description
            link
            id
            photo {
                altText
                image {
                    publicUrlTransformed
                }
            }
            photo2 {
                altText
                image {
                    publicUrlTransformed
                }
            }
            photo3 {
                altText
                image {
                    publicUrlTransformed
                }
            }

            photo4 {
                altText
                image {
                    publicUrlTransformed
                }
            }
        }
    }
`;

export default function SingleProduct({ id }) {
    const user = useUser();

    const { data, loading, error } = useQuery
        (SINGLE_ITEM_QUERY, {
            variables: {
                id,
            },
        });

    if (loading) return <p>Loading...</p>;
    if (error) return <DisplayError error={error} />;

    const { Product } = data;
    
    const dataImage = [
        {
            image: Product?.photo?.image?.publicUrlTransformed,
            text: Product?.photo?.altText
        },
        {
            image: Product?.photo2?.image?.publicUrlTransformed,
            text: Product?.photo2?.altText
        },
        {
            image: Product?.photo3?.image?.publicUrlTransformed,
            text: Product?.photo3?.altText
        },
        {
            image: Product?.photo4?.image?.publicUrlTransformed,
            text: Product?.photo4?.altText
        },
    ];
    
    return (
        <SingleItemStyles>
            <Head>
                <title>MS Portfolio - {Product.name}</title>
            </Head>
            <div className="item-details">
                <h2>{Product.name}</h2>
                <SliderImage 
                    data={dataImage} 
                    width="500px" 
                    showDescription={false} 
                    direction="right" 
                />

                <div className="details">
                    <p>{Product.description}</p>
                    <a href={`${Product.link}`} target="_blank" >{Product.link}</a>
                    <ItemStyles>
                        {!user && ( 
                            <>
                                <div className="buttonList">
                                    <a href="/signup" prefetch="true"><button className="cart-btn">Sign In/Buy</button></a>
                                </div>
                            </>
                        )}

                        {user?.role?.canManageProducts === true && ( 
                            <>
                                <div className="buttonList">
                                    <Link href={{
                                        pathname: '/update',
                                        query: {
                                            id: Product.id,
                                        },
                                    }}>
                                    <a><button className="btn btn-success">Edit</button></a>
                                    </Link>
                                    <a><DeleteProduct id={Product.id}>Delete Product</DeleteProduct></a>
                                </div>
                            </>
                        )}
                    </ItemStyles>
                </div>
            </div>

            <Center>
                <h2>Others you may like</h2>

                <SomeProduct />
            </Center>
        </SingleItemStyles>
    );
}