import styled from 'styled-components';
import ContactSplash from '../components/ContactSplash';
import ContactRequest from '../components/ContactRequest';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;
`;

export default function ContactPage() {
  return <div>
  <ContactSplash />
  <Inner>
    <ContactRequest />
  </Inner>
</div>
}
