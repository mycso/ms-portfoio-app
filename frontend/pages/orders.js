import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import ErrorMessage from '../components/ErrorMessage';
import OrderItemStyles from '../components/styles/OrderItemStyles';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import formatMoney from '../lib/formatMoney';

const USER_ORDERS_QUERY = gql`
    query USER_ORDERS_QUERY {
        allOrders {
            id
            charge
            total
            user {
                id
            }
            items {
                id
                name
                description
                price
                quantity
                photo { 
                    image {
                        publicUrlTransformed
                    }
                }
            }
        }
    }
`;

const OrderUl = styled.ul`
	display: grid;
	grip-gap: 4rem;
	grid-template-columns: repeat(auto-fit,minmax(40%, 1fr));
	padding: 0px;

  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fit,minmax(100%, 1fr));
  }

	h2 {
		padding: 0 15px 0 15px;
	}
`;

const OrderUlWrapper = styled.ul`
	min-height: 720px;
	padding: 0px;
`;

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

export default function OrdersPage() {
    const { data, error, loading } = useQuery(USER_ORDERS_QUERY);
    if(loading) return <p>Loading...</p>;
    if(error) return <ErrorMessage error={error} />;
    const { allOrders } = data;
    return (
        <div>
          <Head>
              <title>Your MS Portfolio orders are ({allOrders.length})</title>
          </Head>
          <h2 className="mx-5 pt-5">You have ({allOrders.length}) orders</h2>
          <OrderUlWrapper>
						<OrderUl>
              {allOrders.map((order) => (
                <OrderItemStyles key={order.id}>
                  <Link href={`/order/${order.id}`}>
                    <a>
                      <div className="order-meta">
                        <p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
                        <p>{order.items.length} Product{order.items.length === 1 ? '' : 's'}</p>
                        <p>{countItemsInAnOrder(order)} Qty</p>
                        <p>{formatMoney(order.total)}</p>
                      </div>
                      <div className="images">
                        {order.items.map(item => (
                          <img key={`image-${item.id}`} src={item?.photo?.image?.publicUrlTransformed} alt={item.title} />
                        ))}
                      </div>
                    </a>
                  </Link>
                </OrderItemStyles>
              ))}
						</OrderUl>
          </OrderUlWrapper>
        </div>
    );
}