import { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import styled from 'styled-components';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import Router from 'next/router';
import { StarsRating } from "stars-rating-react-hooks";

const CREATE_PRODUCT_REVIEW_MUTATION = gql`
    mutation CREATE_PRODUCT_REVIEW_MUTATION (
        $reviewTitle: String! 
        $comment: String!
        $stars: Int!
        $review: ProductRelateToOneInput!
    ){
        createProductReview ( 
            data: {
                reviewTitle: $reviewTitle
                comment: $comment
                stars: $stars 
                review: $review
            }
        ) {
            id
            reviewTitle
            comment
            stars
            review {
                id
                name
                author
            }
        }
    }
`;

const StyledRatingWrapper = styled.div`
label .dv-star-rating .dv-star-rating-star {
    display: inline-block;
    padding: 5px;
    background: transparent;
    float: left;
}
`;

export default function createProductReview ({product}) {
    const [selecting, setSelecting] = useState(null);

    const { inputs, handleChange, clearForm } = useForm({
        reviewTitle: '',
        comment: '',
        stars: 1,
        review: {
            connect: { id: product.id }
        },
    });

    const [createProductReview, { data, error, loading }] = useMutation(
        CREATE_PRODUCT_REVIEW_MUTATION, 
        {
            variables: inputs,
            refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
        }
    );

    const config = {
        totalStars: 5,
        initialSelectedValue: 1,
        renderFull: (
            <img
            alt="star"
            src="https://img.icons8.com/color/30/000000/filled-star--v1.png"
            />
        ),
        renderEmpty: (
            <img alt="star" src="https://img.icons8.com/windows/30/000000/filled-star.png" />
        ),
    };
    
    return (
        <Form 
            onSubmit={async (e) => {
                e.preventDefault();
                //Submit the inputfield to the backend
                const res = await createProductReview({
                    variables: {
                        reviewTitle: inputs.reviewTitle,
                        comment: inputs.comment,
                        stars: selecting?.selectingValue,  
                        review: {
                            connect: { id: product.id }
                        },  
                    },
                }).catch(console.error);
                console.log(res);
                clearForm();
                // change them to the single item page;
                Router.push({
                    pathname: `/product/${product.id}`,
                });
            }}
        >
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <StyledRatingWrapper>
                    {/* <h3>{selecting?.selectingValue}</h3> */}
                    <div>
                        <StarsRating
                        onSelecting={(isSelecting, selectingValue) => {
                            setSelecting({ isSelecting, selectingValue});
                        }}
                        config={config}
                        />
                    </div>
                    <label htmlFor="stars">
                        <input 
                            type="number" 
                            id="stars" 
                            name="stars" 
                            placeholder="Review Stars 1-5"
                            required
                            value={selecting?.selectingValue || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="reviewTitle">
                        <input 
                            type="text" 
                            id="reviewTitle" 
                            name="reviewTitle" 
                            placeholder="Review Title"
                            required
                            value={inputs.reviewTitle || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="comment">
                        <textarea 
                            type="text" 
                            id="comment" 
                            name="comment" 
                            placeholder="Review Comment"
                            required
                            value={inputs.comment || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </StyledRatingWrapper>
            </fieldset>
        </Form>
    );
}