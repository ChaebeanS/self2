import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../slide.css';

// import required modules
import { Pagination } from 'swiper/modules';

function Slide() {

    const slideData = [
    { id: 1, img: '/img/Rectangle3.png', title: "Mountains", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma." },
    { id: 2, img: '/img/Rectangle1.png', title: "Beautiful Flowers", desc: "Lorem ipsum dolor sit amet consectetur. Purus ultrices etiam etiam amet volutpat nullam. Aliquam fringilla volutpat magna rhoncus tellus purus interdum. Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. Mi diam egestas laoreet risus diam." },
    { id: 3, img: '/img/Rectangle2.png', title: "Rivers", desc: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma." },
  ];

  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slideData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slide-card" style={{ 
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}
              >
              
              <div className="text-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}


export default Slide