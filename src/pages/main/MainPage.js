import React from 'react';
import Hero from '../../components/hero/Hero';
import Button from '../../components/button/button';
import Info from '../../components/info/Info';
import Description from '../../components/description/Description';
import HeroImage from '../../img/backgroundImage.png';
import Location from '../../img/location.svg'
import Clock from '../../img/clock.svg'
import {Link} from 'react-router-dom';

const infoRow = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
    bottom: '0',
};

const componentStyle = {
    position: 'absolute',
    height: 'calc(100vh - 60px)',
    width: "100%",
    top: '0',
    bottom: "0",
    left: '0',
    right: '0',
    display: 'flex',
    flexDirection: 'column',

    // background: 'pink'
};
const buttonCenter = {
    left: '0',
    right: '0',
    marginTop: '5%',
    marginLeft: 'auto',
    marginRight: 'auto',
};

const MainPage = () => (
    <div style={componentStyle}>
        <Hero src={HeroImage}/>
        <Description
                     title="Masters old and new"
                     subTitle="exhibition"
                     where="Floor 5"
                     date="april 15 - september 20"/>
        <Link  style={buttonCenter} to={'/planyourvisit'}><Button>Plan your visit</Button></Link>
        <div style={infoRow}>
            <Info text="151 3rd St San Francisco, CA 94103"
                  icon={Location}/>
            <Info text="Open today 10:00am - 5:30pm"
                  icon={Clock}/>
        </div>
    </div>
);
export default MainPage;
