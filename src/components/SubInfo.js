import StyledSubHeader from './styles/SubHeaderStyles';
// import User from './User';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//     faTruck,
// } from '@fortawesome/free-solid-svg-icons';

export default function SubInfo() {
	// console.log(user);

    return (
        <StyledSubHeader>
        <div className="subheader-wrapper">
                <div className="subheader-inner">
                    <span>
                        <div className="float-left">mycso@live.co.uk</div>
                    </span>
                    {/* {user && (
                        <>
                            <li>
                                <Link href="/account">
                                    <span>
                                        <a className="float-left">Hi, {user.email}</a>
                                    </span>
                                </Link>
                            </li>
                        </>
                    )}

                    {!user && ( 
                        <>
                            <li>
                                <span>
                                    <Link activeClassName='active' href="/signin">
                                        <a href="/signin" className="float-left">Sign In</a>
                                    </Link>
                                    <span className="float-right"><FontAwesomeIcon icon={faTruck} /> FREE UK Delivery</span>
                                </span>
                            </li>
                        </>
                    )}	 */}
                </div>
        </div>
        </StyledSubHeader>
    );
}