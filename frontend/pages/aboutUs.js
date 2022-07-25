import styled from 'styled-components';
import AboutSplash from '../components/AboutSplash';

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  font-size: 20px;
`;

export default function AboutPage() {
  return <div>
    <AboutSplash />
    <Inner>
      <br/>
      <h2>So Who Am I?</h2>
      <p>
        A Creative Coder and UI designer or a special unicorn hybrid lol! I am always willing to learn and not afraid to try new things. 
        I enjoy participating in groups creating multimedia elements and designing interfaces and progamming using different 
        design software. I have high knowledge building and designing single page applications and traditional 
        page applications. With the initial skillset of UI/UX designing the look and experience of the software 
        applications and coding with languages such as HTML5, CSS3, Bootstrap 3.0, ReactJS, Angular 
        JS, NodeJs, Vanilla Javascript, Jquery, Wordpress, Figma, PhotoShop, Invision, Zeplin.io and After Effects etc.
      </p>
      <p>
        I am a very hard working man when it comes to work or anything that involves or appeals to the basis of responsibility. 
        I have the desire to succeed in everything I do putting in 100%. I am target driven and very 
        direct therefore I like to deliver when I have been set a task. I always aim for the best within 
        me and the people I work with. I thrive on challenges, and I am always looking to exceed my 
        previous success. My main goal is to become an individual who works amongst people in an 
        innovative and creative environment and also has the skillset of a backend developer.
      </p>
      <a target="_blank" href="http://localhost:7777/static/michaelsokan-cv4.pdf">See my CV</a>
      <br/>
    </Inner>
  </div>
}
