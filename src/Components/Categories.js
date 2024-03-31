import React from 'react';
import tt1 from '../image/Categories/tt1.png';
import tt2 from '../image/Categories/tt2.png';
import tt3 from '../image/Categories/tt3.png';
import tt4 from '../image/Categories/tt4.png';
import tt5 from '../image/Categories/tt5.png';
import tt6 from '../image/Categories/tt6.png';

export const Categories = () => {
  return (
    <div>
        <div className="flex flex-row mb-[20px]">
            <div>
                <img src= {tt1}></img>
            </div>
            <div>
            <img src= {tt2}></img>
            </div>
            <div>
            <img src= {tt3}></img>
            </div>
            <div>
            <img src= {tt4}></img>
            </div>
            <div>
            <img src= {tt5}></img>
            </div>
            <div>
            <img src= {tt6}></img>
            </div>
        </div>
    </div>
  )
}

export default Categories;