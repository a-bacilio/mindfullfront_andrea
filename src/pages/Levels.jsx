import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../assets/images/levels/1.png"
import img2 from "../assets/images/levels/2.png"
import img3 from "../assets/images/levels/3.png"
import img4 from "../assets/images/levels/4.png"
import img5 from "../assets/images/levels/5.png"
import img6 from "../assets/images/levels/6.png"
import img7 from "../assets/images/levels/7.png"
import img8 from "../assets/images/levels/8.png"
import img9 from "../assets/images/levels/9.png"
import img10 from "../assets/images/levels/10.png"
import img11 from "../assets/images/levels/11.png"
import img12 from "../assets/images/levels/12.png"
import img13 from "../assets/images/levels/13.png"
import img14 from "../assets/images/levels/14.png"
import img15 from "../assets/images/levels/15.png"
import img16 from "../assets/images/levels/16.png"
import img17 from "../assets/images/levels/17.png"
import img18 from "../assets/images/levels/18.png"
import img19 from "../assets/images/levels/19.png"
import img20 from "../assets/images/levels/20.png"
import img21 from "../assets/images/levels/21.png"
import img22 from "../assets/images/levels/22.png"
import img23 from "../assets/images/levels/23.png"
import img24 from "../assets/images/levels/24.png"
import img25 from "../assets/images/levels/25.png"
import img26 from "../assets/images/levels/26.png"
import img27 from "../assets/images/levels/27.png"
import img28 from "../assets/images/levels/28.png"
import img29 from "../assets/images/levels/29.png"
import img30 from "../assets/images/levels/30.png"
import locked from "../assets/images/levels/locked.png"



function Levels() {

    const level=16
    const images = [
        img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30]

  return (
    <div>
        <div className='w-full items-center'>
            <h1 className='text-2xl text-bold text-white text-center'>Niveles</h1>
        </div>
        <div className='grid lg:grid-cols-6 md:grid-cols-3 grid-cols-3'>
            {images.map((x,i)=><Link key={"link_nivel_"+String(i)} className='w-full flex flex-col items-center justify-centers' to={"/level/"+String(i+1)}>
                <div className='p-1 flex flex-col items-center justify-center'>
                <h2>{i+1}</h2>
                {level>=i?<img className='h-16' src={x}  />:<img className='h-16' src={locked}  />}
                </div>
            </Link>)}
        </div>
    </div>
  )
}

export default Levels