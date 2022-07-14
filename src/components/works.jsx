import React from "react";
import data from "./data";
import { Swiper, SwiperSlide } from '../../node_modules/swiper/react/swiper-react';
import { Navigation, Scrollbar} from '../../node_modules/swiper/swiper.esm';
// import 'swiper/css' ;
// import 'swiper/css/navigation';
import '../../node_modules/swiper/swiper.min.css';
import '../../node_modules/swiper/modules/navigation/navigation.min.css';

function Create_card(work){
    return(
        <SwiperSlide>
            <div class="card">
                <a href={work.site_url} target="_blank" rel="noopener noreferrer">
                <img src={work.site_image_src} alt="" /></a>
                <h2 class="card-heading">{work.site_title}</h2>
                <a class="btn see-btn" href={work.site_url} target="_blank" rel="noopener noreferrer">
                    مشاهده سایت
                    <span class="iconify" data-icon="akar-icons:chevron-left" data-width="24" data-height="24"></span>              
                </a>
            </div>
        </SwiperSlide>
    )
}

function Works(){

    return(
        <div>
            <div class="works" id="works">
                <div class="border">
                        <h1 class="heading1">نمونه کار پیاده سازی سایت</h1>
                            <div class="posts">
                                <Swiper
                                    modules={[Navigation,Scrollbar]}
                                    navigation
                                    loop="true"
                                    breakpoints={{
                                        1000:{
                                            slidesPerView:3,
                                        },
                                        800:{
                                            slidesPerView:2,
                                        },
                                        300:{
                                            slidesPerView:1,
                                        }
                                    }}
                                    >
                                        {data.map(Create_card)}
                                </Swiper>
                            </div>
                        <h1 class="heading1">نمونه کار UI / UX</h1>
                            <div class="posts">
                            <Swiper
                                    modules={[Navigation,Scrollbar]}
                                    navigation
                                    loop="true"
                                    breakpoints={{
                                        1000:{
                                            slidesPerView:3,
                                        },
                                        800:{
                                            slidesPerView:2,
                                        },
                                        300:{
                                            slidesPerView:1,
                                        }
                                    }}
                                    >
                                        {data.map(Create_card)}
                                </Swiper>
                            </div>                    
                </div>
            </div>
        </div>
    )
}
export default Works;