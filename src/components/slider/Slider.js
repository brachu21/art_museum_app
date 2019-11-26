import React from 'react';
import SlideImg from '../../img/slider/slide.png';
import './slider.scss';
import Hero from '../../components/hero/Hero'

const photos = [
    {
        text: '"Title" autor Trelemorele',
        img: SlideImg
    },
    {
        text: '"Title" autor Trelemorele',
        img: SlideImg
    },
    {
        text: '"Title" autor Trelemorele',
        img: SlideImg
    },
]

const descStyle = {
    fontSize: '10px',
    color: '#979797',
    textAlign: 'center'
}

class Slider extends React.Component {

    state = {};


    render() {
        return (
            <>
            <Hero src={SlideImg}/>
                <p style={descStyle}>“Abandoned Dust Bowl Home”<br/>
                    Gelatin silver print<br/>
                    about 1935 - 1940</p>
            </>
        )
    }
}

export default Slider;
