import React from 'react';
function Header(){
    return(
        <header  class="bg-cover text-white  h-[100vh] px-[5%]" style={{"background-image":"url(./iceland-1-1.jpg)"}}>
            <div class="flex justify-end pt-[15px] pr-[3%]">
                <a class="px-[15px]" href='/'>1,8000,448,8814</a>| 
                <a class="px-[15px]" href='/'>LOCATIONS</a>|
                <a class="px-[15px]" href='/'>CONTACT US</a>|
                <a class="px-[15px]" href='/'>SERVICE</a>|
                <a class="px-[15px]" href='/'><bold>E-STORE</bold></a>  
            </div>
            <nav class="h-[20vh] flex justify-between px-[5px]"> 
                <div class="text-[3.5rem] font-bold mt-[1rem]">
                    <a href='/'>Olympics</a>
                </div>
                <ul class="flex justify-between mt-[2.5rem] ">
                    <li class="pr-[5rem] font-bold cursor-pointer"><a href='/'>About</a></li>
                    <li class="pr-[5rem] font-bold cursor-pointer"><a href='/'>Hot Tubs</a></li>
                    <li class="pr-[5rem] font-bold cursor-pointer"><a href='/'>Swim Spas</a></li>
                    <li class="pr-[5rem] font-bold cursor-pointer"><a href='/'>Resources</a></li>
                    {/* <li><button class="btn-primary">Hire</button></li> */}
                </ul>
            </nav>
            {/* header banner  */}
            <div class="banner">
                {/* <img src="" alt="s"/> */}
                <div>
                    {/* <h3 class="banner-sub-title">Hi, I am</h3> */}
                    <h2 class="text-[7rem] mobile:text-[1.5rem] pt-[40vh]  font-bold">Better You, Better Life </h2>
                    <p class="text-[2rem] mobile:text-[1rem]">Olympics Hot Tub is the largest saltwater hot tub retalier in Washington State. Health and weliness through water is our  passion! Our saltwater hot tubs are easy to use. eco-friendly, anhd have evberything you need to relax and unwind .</p>
                </div>
            </div>
        </header>
    );
}
export {Header}