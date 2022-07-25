import styled from 'styled-components';

const PaginationStyles = styled.div`
  text-align: center;
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  align-items: stretch;
  justify-content: center;
  align-content: center;
  margin: 2rem 0;
  color: ${props => props.theme.black};
  border: 0;
  border-radius: 10px;
  background: ${props => props.theme.white};
  & > * {
    margin: 0;
    padding: 5px 30px;
    border-right: 1px solid ${props => props.theme.black};
    &:last-child {
      border-right: 0;
    }
  }

  a[aria-disabled='false'] {
    color: ${props => props.theme.purple};
  }

  a[aria-disabled='true'] {
    color: ${props => props.theme.black};
    pointer-events: none;
  }
  @media (max-width: 700px) {
        font-size: 18px;
  }

  @media (max-width: 500px) {
    a {
      padding: 18px 5px !important;
    }

    p {
      padding: 18px 5px !important;
    }
  }
`;

export default PaginationStyles;
