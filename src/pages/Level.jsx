import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
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


function Level() {


    const { level_x } = useParams()

    const levelsData = [
        {
            title: "Nivel 0",
            text: "Lorem ipsum, text 2",
            duration_video: 300,
            link_video: "https://player.vimeo.com/video/810735707",
            duration_audio: 350,
            link_audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1660314906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            level_img: img1,
        },
        {
            title: "Nivel 1",
            text: "Lorem ipsum, text 2",
            duration_video: 300,
            link_video: "https://player.vimeo.com/video/810735707",
            duration_audio: 350,
            link_audio: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1660314906&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
            level_img: img2,
        },
    ]

    const info = levelsData[level_x]

    const [state, setState] = useState(true);
    const [card, setCard] = useState(0);

    return (
        <div className='w-full h-full'>
            {card == 0 &&
                <div className='border-solid border-yellow-100 border-100 w-full h-full flex flex-col justify-center items-center'>
                    <h1 className='mb-8 font-raleway'>{info.title}</h1>
                    <div className="w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                        <img src={info.level_img}></img>
                        <button className='bg-white mt-8 w-1/2 opacity-65' onClick={() => setCard(1)} >Iniciar meditación</button></div></div>}
            
            {card == 1 && <div className='w-full items-center fixed top-0 left-0 w-full h-full flex-center flex-column justify-center z-[100] bg-black'>
                <iframe title="vimeo-player" src="https://player.vimeo.com/video/5238050?h=3e9e4971a4" className="absolute z-10 w-auto min-w-full min-h-full max-w-none"></iframe></div>}

            {card == 2 && <div className='w-full items-center'>
                <h1 className='text-2xl text-bold text-white text-center mt-5'>Nivel {Number(level_x)}</h1>
                <h2>{info.title ?? "Titulo en blanco"}</h2>
                <p>{info.text ?? "Cuerpo del texto"}</p>
                <div class="aspect-video">
                <iframe title="vimeo-player" class="w-full h-full" src="https://player.vimeo.com/video/5238050?h=3e9e4971a4" wframeborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
</div>
            </div>}


        </div >
    )
}

export default Level