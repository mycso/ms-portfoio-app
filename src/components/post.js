import { Link } from "react-router-dom";
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEye,
} from '@fortawesome/free-solid-svg-icons';

export default function Post({ post }) {

    return ( 
        <ItemStyles>
            <Title>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
            </Title>
            <br />
            <Link to={`/post/${post.id}`}>
                <img 
                    src={post?.image} 
                    alt={post.title} 
                />
            </Link>
            <br />
            
            <div className="buttonList">
                <Link to={`/post/${post.id}`}>
                    <button type="button" className="cart-btn">
                        View <FontAwesomeIcon icon={faEye} />
                    </button>
                </Link>
            </div>
        </ItemStyles>
    );
}