import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import './Carousel.css';
const Carousel = () => {
    return (
        <>
            <Swiper
                effect={"fade"}
                rewind={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className=""
            >
                <SwiperSlide>
                    <div className='carousel-image-container1'>
                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">medicine!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container2'>
                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">medicine!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container3'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">medicine!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container4'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">meds!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container5'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">mes!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='carousel-image-container6'>

                        <div className='p-10 md:ml-8 h-80  text-secondary   lg:w-1/2 '>
                            <h1 className="sm:text-3xl lg:text-6xl">mes!!!</h1>
                            <p className="my-10 leading-8 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quidem, ratione quaerat, iste dolor harum, esse laudantium autem consequuntur dolorem consequatur labore enim deleniti nesciunt totam cum. Enim, earum impedit!</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Carousel;