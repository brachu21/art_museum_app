import React from 'react';
import styled from 'styled-components';


const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 16px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: auto;
  }
  p {
    color: ${({theme}) => theme.color.primaryColor};
    width: 50%;
    font-size: 12px;
  }
`;

const CollectionList = ({list}) => (
    <List>
        {list.map(item => (
            <ListItem>
                <img src={item.image}/>
                <p>{item.title}</p>
            </ListItem>
        ))}
    </List>
);

export default CollectionList;
