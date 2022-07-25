import { useQuery } from '@apollo/client';
import Link from 'next/link';
import DeleteProduct from './DeleteProduct';
import { useUser } from './User';
import ReviewTitle from './styles/ReviewTitle'
import ReviewStyles from './styles/ReviewStyles';
import { StarsRating } from "stars-rating-react-hooks";
import { perPage } from '../config';

export default function Reviews({ review, page }) {
    const user = useUser();

    const config = {
        totalStars: 5,
        initialSelectedValue: review.stars,
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
        <>
            <ReviewStyles>
                <ReviewTitle>
                    {review.reviewTitle}
                </ReviewTitle>
                <div className="rating-wrapper">
                        <StarsRating config={config} />
                        <span className="star-result">
                            ({review.stars})
                        </span>
                </div>
                <p>{review.comment}</p>
            {/* 
                {!user && ( 
                    <div>Sign in to see reviews</div>
                )}

                {user?.role?.canManageReviews === true && ( 
                    <>
                        <div className="buttonList">
                            <Link href={{
                                pathname: '/update',
                                query: {
                                    id: review.id,
                                },
                            }}>
                            <a><button className="btn btn-success">Edit</button></a>
                            </Link>
                            <a><DeleteProduct id={review.id}>Delete Product</DeleteProduct></a>
                        </div>
                    </>
                )} */}
            </ReviewStyles>
            <hr />
        </>
    );
}