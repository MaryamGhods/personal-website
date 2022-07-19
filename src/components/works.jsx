import {websites , designs} from "./data";
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css' ;
import 'swiper/css/navigation';

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
                                    modules={[Navigation]}
                                    class="swiper-container"
                                    navigation="true"
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
                                        {websites.map(Create_card)}
                                </Swiper>
                            </div>
                        {/* <h1 class="heading1">نمونه کار UI / UX</h1>
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
                                        {designs.map(Create_card)}
                                </Swiper>
                            </div>                     */}
                </div>
            </div>
        </div>
    )
}
export default Works;