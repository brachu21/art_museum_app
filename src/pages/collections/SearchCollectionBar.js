import styled from 'styled-components';

const SearchCollectionBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  
  input {
    width: 100%;
    border: 2px solid ${({theme}) => theme.color.primaryColor};
    padding: 8px;
    font-size: ${({theme}) => theme.dimensions.sidebarFontSize};
    // background: url(${props => props.icon || ""}) no-repeat scroll 7px 7px;
    ::placeholder {
      color: ${({theme}) => theme.color.primaryColor};
    }
  }
  
  img {
    margin-left: -10%;
    height: 18px;
    width: 18px;
  }
  
`;

export default SearchCollectionBar;

