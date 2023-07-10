import React from 'react';
import { Top } from './top.js'
import { Carousel} from './carousel.js'
function Main(){
    return(
        <main>
            <section>
                <Top/>
            </section>
            <section>
                <div class="pb-[1%] mx-[1%] ">
                    <div class=" h-[50vh] mobile:h-[10vh]">
                        <img class="w-full  absolute" src="./officernd1-1.jpg" alt='sa'/>
                    </div>
                    <h2 class="text-center text-[6rem] mobile:text-[3rem] relative font-bold text-white">Find wellness through water.</h2>                   
                </div>
                <div class="px-[15%] bg-gradient-to-r from-sky-500/20 to-indigo-500/10">
                    <h4 class="py-[5%] text-[4rem] mobile:text-[1rem] text-center font-bold text-blue-900">Owning a hot tub or spa is a great way to improve your health and wellness.</h4>
                </div>
            </section>
            <section>
                <Carousel/>
            </section>
        </main>
    );
}
export {Main}