import ContactSplash from '../components/ContactSplash';
import ContactRequest from '../components/ContactRequest';
import Inner from '../components/styles/InnerStyles';

export default function ContactPage() {
  return <div>
  <ContactSplash />
  <Inner>
    <br/>
    <ContactRequest />
  </Inner>
</div>
}
