// import PleaseSignIn from '../components/PleaseSignin';
import Account from '../components/Account';

export default function AccountPage({ query }) {
	return <div>
		<Account id={query.id} />
  	</div>
};