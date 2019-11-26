import styled from 'styled-components';

const Hamburger = styled.button`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: ${({theme}) => theme.dimensions.hamburgerSize};
  height: ${({theme}) => theme.dimensions.hamburgerSize};
  background: transparent;
  border: none;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: ${({theme}) => theme.dimensions.hamburgerSize};
    height: 0.2rem;
    background: ${({open}) => open ? '#0D0C1D' : '#000'};
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default Hamburger;

