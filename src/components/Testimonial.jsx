import React from "react";
import "./Testimonial.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Sliderdata } from "../data/SliderData";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


const Testimonial = () => {
    const {Theme} = useContext(ThemeContext)
    return (
        <div className={Theme === 'LightMode' ? 'testimonial LightMode' : 'testimonial DarkMode'}>
            <h2 className="testimonial_title">Valuable<span> Testimonial</span></h2>

            <div className="testimonial_wrapper">
            <Swiper style={{'--swiper-pagination-color': '#754ef9', '--swiper-pagination-bullet-inactive-color': '#754ef9'}} 
            navigation={true} pagination={{clickable: true}} mousewheel={true} keyboard={true}
             modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]} loop={true} slidesPerView={1}
             spaceBetween={50} grabCursor={false} autoplay={{delay:5000}} className="mySwiper testimonial_box" >
                    <div className="testimonial_content swiper-wrapper">
                        {
                            Sliderdata.map(slide => (
                                <SwiperSlide className="swiper_slider">
                                <div className="testimonial_slide" key={slide.id}>
                                    <img src={slide.image} alt="testimonial"></img>
                                    <h3>{slide.name}</h3>
                                    <p>{slide.testimonial}</p>
                                </div>
                                </SwiperSlide>
                            ))
                        } 
                    </div>
                </Swiper>
            </div>            
        </div>
    );
}

export default Testimonial;