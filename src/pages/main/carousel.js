import React from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Carousel(){
    var settings = {
        autoplay:true,
        autoplaySpeed:2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2
        };
        return (
        <Slider {...settings}>
            <div class="p-[4%]">
                <div class="w-[75px] h-[75px] mx-[40%] ">
                    <img class="w-full h-full" src="./officernd1-1.jpg" alt='sa'/>
                </div>
                <p class="text-[2rem] mobile:text-[1.5rem] font-bold text-center py-[2%] text-emerald-950  ">What Our Customers Are Saying</p>
                <p class="text-center text-[1.3rem] mobile:text-[1rem] leading-10  px-[20%] italic">This is the only place I will ever buy a hot tub again... if ever need to purchase another one, that is. Scott was amazing thru the whole process and was super helpful and kept me  in the loop when there was a backorder on the cover that went with the spa. I will recommend them to everyone I know! Thank you!</p>
                <p class="font-bold text-=[1.5rem] text-center text-emerald-900">-Trisha</p>
                <div></div>
            </div>      
            <div class="p-[4%]">
                <div class="w-[75px] h-[75px] mx-[40%] ">
                    <img class="w-full h-full" src="./officernd1-1.jpg" alt='sa'/>
                </div>
                <p class="text-[2rem] mobile:text-[1.5rem] font-bold text-center py-[2%] text-emerald-950  ">What Our Customers Are Saying</p>
                <p class="text-center text-[1.3rem] mobile:text-[1rem] leading-10  px-[20%] italic">This is the only place I will ever buy a hot tub again... if ever need to purchase another one, that is. Scott was amazing thru the whole process and was super helpful and kept me  in the loop when there was a backorder on the cover that went with the spa. I will recommend them to everyone I know! Thank you!</p>
                <p class="font-bold text-=[1.5rem] text-center text-emerald-900">-Trisha</p>
                <div></div>
            </div>      
            <div class="p-[4%]">
                <div class="w-[75px] h-[75px] mx-[40%] ">
                    <img class="w-full h-full" src="./officernd1-1.jpg" alt='sa'/>
                </div>
                <p class="text-[2rem] mobile:text-[1.5rem] font-bold text-center py-[2%] text-emerald-950  ">What Our Customers Are Saying</p>
                <p class="text-center text-[1.3rem] mobile:text-[1rem] leading-10  px-[20%] italic">This is the only place I will ever buy a hot tub again... if ever need to purchase another one, that is. Scott was amazing thru the whole process and was super helpful and kept me  in the loop when there was a backorder on the cover that went with the spa. I will recommend them to everyone I know! Thank you!</p>
                <p class="font-bold text-=[1.5rem] text-center text-emerald-900">-Trisha</p>
                <div></div>
            </div>      
            <div class="p-[4%]">
                <div class="w-[75px] h-[75px] mx-[40%] ">
                    <img class="w-full h-full" src="./officernd1-1.jpg" alt='sa'/>
                </div>
                <p class="text-[2rem] mobile:text-[1.5rem] font-bold text-center py-[2%] text-emerald-950  ">What Our Customers Are Saying</p>
                <p class="text-center text-[1.3rem] mobile:text-[1rem] leading-10  px-[20%] italic">This is the only place I will ever buy a hot tub again... if ever need to purchase another one, that is. Scott was amazing thru the whole process and was super helpful and kept me  in the loop when there was a backorder on the cover that went with the spa. I will recommend them to everyone I know! Thank you!</p>
                <p class="font-bold text-=[1.5rem] text-center text-emerald-900">-Trisha</p>
                <div></div>
            </div>      
        </Slider>
        );
}