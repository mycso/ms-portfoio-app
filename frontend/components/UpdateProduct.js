import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import styled from 'styled-components';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import Router from 'next/router';
// import { CloudinaryContext, Image } from 'cloudinary-react';

const SINGLE_PRODUCT_QUERY = gql`
    query SINGLE_PRODUCT_QUERY($id: ID!) {
        Product(where: { id: $id }) {
            id
            name
            description 
        }
    }
`;

const UPDATE_PRODUCT_MUTATION = gql`
    mutation UPDATE_PRODUCT_MUTATION (
        $id: ID!
        $name: String!
        $description: String!
    ){
        updateProduct(
            id: $id
            data: {
                name: $name
                description: $description
                status: "AVAILABLE"
            }
        ) {
            id
            name
            description
        }
    }
`;

const StyledUploadFileBtn = styled.div`
label{
  padding:5px 10px;
  background:#efefef;
  position:relative;
  color:#606060;
  border-radius:2px;
  text-align:center;
  cursor:pointer
}

.upload-btn-file {
    position: absolute;
    z-index: 1000;
    opacity: 0;
    cursor: pointer;
    background:#efefef;
    color:#606060;
    right: 0;
    top: 0;
    height: 100%;
    font-size: 24px;
    width: 100%;
    cursor:pointer
}
`;

export default function UpdateProduct ({ id }) {

    const { loading, error, data } = useQuery
    (SINGLE_PRODUCT_QUERY, {
        variables: { id }
    });

    const [updateProduct, { data: updateData, error: updateError, loading: updateLoading }] = useMutation
    (UPDATE_PRODUCT_MUTATION);

    const { inputs, handleChange, clearForm, resetForm } = useForm(data?.Product);

    console.log(inputs);
    console.log(handleChange);

    if (loading) return <p>loading...</p>;

    return (
        <Form 
            onSubmit={async (e) => {
                e.preventDefault();
                const res = await updateProduct({
                    variables: {
                        id,
                        name: inputs.name,
                        description: inputs.description,
                        image: inputs.image, 
                        image2: inputs.image2,      
                        image3: inputs.image3,  
                        image4: inputs.image4,                      
                    },
                }).catch(console.error);
                Router.push({ 
                    pathname: `/`,
                });


            }}
        >
            <DisplayError error={error || updateError} />
            <fieldset disabled={updateLoading} aria-busy={updateLoading}>
                <label htmlFor="name">
                   Product Name
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Book Title"
                        required
                        value={inputs.name || ''}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="10"
                        placeholder="Enter A Description" 
                        value={inputs.description || ''}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Update Product</button>
            </fieldset>
        </Form>
    );
}