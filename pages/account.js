import PleaseSignIn from '../components/PleaseSignin';
import Account from '../components/Account';

export default function AccountPage({ query }) {
	return <div>
		<PleaseSignIn>
			<Account id={query.id} />
		</PleaseSignIn>
  	</div>
};