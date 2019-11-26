import React from 'react';
import SearchCollectionBar from './SearchCollectionBar';
import Icon from '../../img/EllipsePrimaryColor.svg';
import Image1 from '../../img/collection/coll-1.jpg';
import Image2 from '../../img/collection/coll-2.jpg';
import Image3 from '../../img/collection/coll-3.jpg';
import Image4 from '../../img/collection/coll-4.jpg';
import Image5 from '../../img/collection/coll-5.jpg';
import Image6 from '../../img/collection/coll-6.jpg';
import CollectionList from '../../components/collections/CollectionList';
import HintText from '../../components/hint/HintText';

const collections = [
    {
        title: "DECORATIVE ARTS & CRAFTS ",
        image: Image1
    },
    {
        title: "AMERICAN IMPRESSIONISM",
        image: Image2
    },
    {
        title: "DE STIJL",
        image: Image3
    },
    {
        title: "CUBISM",
        image: Image4
    },
    {
        title: "AMERICAN PHOTOGRAPHY",
        image: Image5
    },
    {
        title: "GREEK ANTIQUITIES",
        image: Image6
    },
];

const CollectionsPage = () => (
    <>
        <SearchCollectionBar style={{marginTop: '12px'}} icon={Icon}>
            <input placeholder="Explore the Collection" type="text"/>
            <img src={Icon}/>
        </SearchCollectionBar>
        <HintText>Advanced search</HintText>
        <CollectionList list={collections}/>
    </>
);

export default CollectionsPage;
