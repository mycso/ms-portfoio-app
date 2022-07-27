import styled from 'styled-components';

const RatingTitle = styled.h3`
  margin: 0;
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 10px;
  
  a {
    display: inline;
    line-height: 1.3;
    font-size: 1.3rem;
    text-align: center;
    color: ${props => props.theme.black};
    font-weight: bold;
    padding: 0 1rem;
  }
`;

export default RatingTitle;
