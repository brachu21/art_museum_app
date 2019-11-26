import React from 'react';
import SlideImg from '../../img/slider/slide.png';
import Dots from './Dots';
import './slider.scss';

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

class Slider extends React.Component {

    state = {};


    render() {
        return (
            <section id="slider">

                <input type="radio" name="slider" id="s1"/>
                <input type="radio" name="slider" id="s2"/>
                <input type="radio" name="slider" id="s3" />
                <input type="radio" name="slider" id="s4" checked/>
                <input type="radio" name="slider" id="s5"/>

                <label htmlFor="s1" id="slide1"></label>
                <label htmlFor="s2" id="slide2"></label>
                <label htmlFor="s3" id="slide3"></label>
                <label htmlFor="s4" id="slide4"></label>
                <label htmlFor="s5" id="slide5"></label>
            </section>
        )
        // return (
        //
        // <div className="slider">
        // {photos.map((p, i) => (
        //                 <Slide key={i} img={p.img} text={p.text}/>
        //             ))}
        //         </div>
        //         <Dots photos={photos}/>
        //     </>
        // );
    }
}

const Slide = ({img, text}) => (
    <>
        <input/>
        //TODO text
    </>
)
//
// const Slide = ({img, text}) => (
//     <div className="slide">
//         <img src={img}/>
//         <p>{text}</p>
//     </div>
// );

export default Slider;
