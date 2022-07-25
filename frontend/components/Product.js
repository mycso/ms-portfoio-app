import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import DeleteProduct from './DeleteProduct';
import { useUser } from './User';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';

export default function Product({ product }) {
    const user = useUser();

    return <ItemStyles>
        <Title>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <br />
        <Link href={`/product/${product.id}`}>
            <img 
                src={product?.photo?.image?.publicUrlTransformed} 
                alt={product.name} 
            />
        </Link>
        <br />
        
        <div className="buttonList">
            <Link href={`/product/${product.id}`}>
                <a><button type="button" className="cart-btn">
                    View <FontAwesomeIcon icon={faEye} />
                </button></a>
            </Link>
        </div>

        {user?.role?.canManageProducts === true && ( 
            <>
                {
                    product?.inStock > 1 ? 
                    <div className="buttonList">
                        {/* <AddToCart id={product.id} /> */}
                        <Link href={`/product/${product.id}`}>
                            <a><button type="button" className="cart-btn">
                                View <FontAwesomeIcon icon={faEye} />
                            </button></a>
                        </Link>
                    </div> : '' 
                }
                <div className="buttonList">
                    <Link href={{
                        pathname: '/update',
                        query: {
                            id: product.id,
                        },
                    }}>
                    <a><button className="btn btn-success">Edit</button></a>
                    </Link>
                    <a><DeleteProduct id={product.id}>Delete Product</DeleteProduct></a>
                </div>
            </>
        )}
        {/* TODO Add to cart button */}
    </ItemStyles>;
}