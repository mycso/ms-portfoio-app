import { useMutation, useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import useForm from '../lib/useForm';
import styled from 'styled-components';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';
import DisplayError from './ErrorMessage';
import Router from 'next/router';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION (
        $name: String!
        $image: Upload
        $image2: Upload
        $image3: Upload
        $image4: Upload
        $description: String!
    ){
        createProduct(data: {
            name: $name
            description: $description
            status: "AVAILABLE"
            photo: { create: { image: $image, altText: $name } }
            photo2: { create: { image: $image2, altText: $name } }
            photo3: { create: { image: $image3, altText: $name } }
            photo4: { create: { image: $image4, altText: $name } }
        }) {
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

export default function CreateProduct () {
    const { inputs, handleChange, clearForm, resetForm } = useForm({
        name: 'nice book',
        description: 'Testing',
        image: '',
        image2: '',
        image3: '',
        image4: '',
    });

    const [createProduct, { data, error, loading }] = useMutation(
        CREATE_PRODUCT_MUTATION, 
        {
            variables: inputs,
            refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
        }
    );

    console.log(createProduct);

    console.log(inputs.image.name);

    return (
        <Form 
            onSubmit={async (e) => {
                e.preventDefault();
                //Submit the inputfield to the backend
                const res = await createProduct();
                clearForm();
                Router.push({
                    pathname: `/product/${res.data.createProduct.id}`,
                });
            }}
        >
            <DisplayError error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
                <StyledUploadFileBtn>
                    <label htmlFor="image">
                    
                        {!inputs.image && (
                            <p>Upload Book Image 1 Here</p>
                        )}

                        {inputs.image && (
                            <p>{inputs.image.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image" 
                            name="image"
                            required
                            className="upload-btn-file"
                            onChange={handleChange}
                        />
                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image2">

                        {!inputs.image2 && (
                            <p>Upload Book Image 2 Here</p>
                        )}

                        {inputs.image2 && (
                            <p>{inputs.image2.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image2" 
                            name="image2"
                            required
                            className="upload-btn-file"
                            onChange={handleChange}
                        />
                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image3">

                        {!inputs.image3 && (
                            <p>Upload Book Image 3 Here</p>
                        )}

                        {inputs.image3 && (
                            <p>{inputs.image3.name}</p>
                        )}

                        <input 
                            type="file" 
                            id="image3" 
                            name="image3"
                            required
                            className="upload-btn-file"
                            onChange={handleChange}
                        />
                    </label>
                </StyledUploadFileBtn>
                <StyledUploadFileBtn>
                    <label htmlFor="image">
                        
                        {!inputs.image4 && (
                            <p>Upload Book Image 4 Here</p>
                        )}

                        {inputs.image4 && (
                            <p>{inputs.image4.name}</p>
                        )}
                        
                        <input 
                            type="file" 
                            id="image4" 
                            name="image4"
                            required
                            className="upload-btn-file"
                            onChange={handleChange}
                        />
                    </label>
                </StyledUploadFileBtn>
                <label htmlFor="name">
                   Book Title
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
                        required 
                        value={inputs.description || ''}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Submit</button>
                <button type="button" onClick={clearForm}>Clear Form</button>
                <button type="button" onClick={resetForm}>Reset Form</button>
            </fieldset>
        </Form>
    );
}