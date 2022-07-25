import { useMutation } from '@apollo/client';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import gql from 'graphql-tag';

const RemoveButton = styled.button`
  font-size: 1.5rem;
  background: none;
  border: 0;
  color: ${props => props.theme.grey};
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem))
}

export default function RemoveFromCart({ id }) {
    console.log(id);
    const [removeFromCart, { loading }] = useMutation(REMOVE_FROM_CART_MUTATION, { 
      variables: { id },
      update,
      // optimisticResponse: {
      //   deleteCartItem: {
      //     __typename: 'CartItem',
      //     id,
      //   },
      // },
    });
    return (
        <RemoveButton 
          onClick={removeFromCart} 
          disabled={loading}
        >
            <FontAwesomeIcon icon={faTimes} />
        </RemoveButton>
    );
}