import React from 'react'

import kk1 from '../image/Gender_banner/kk1.jpg';


export const GenderBanner = () => {
    return (
        <div className="bg-[#FEFEFE]">
            <div className= "h-[30px] bg-gradient-to-b from-[rgb(245,245,245)] "></div>
            <div className=" mx-[130px]  grid ">
                <img src = {kk1}></img>
            </div>

            <div className="p-[30px]">
                <div className="flex  flex-col items-center">
                    <div className="text-[40px] text-[#142E8E]">OMG! DEALS</div>
                    <p className="text-[20px] text-[#142E8E]">MEDAL-WORTHY BRANDS TO BAG</p>
                </div>
            </div>
        </div>
    );
};

export default GenderBanner;
