import React, { useEffect, useState } from 'react'
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
import { useGetLevelQuery } from '../app/redux/querys/authquerys'
import LoadNextPageButton from '../components/LoadNextPageButton'

function Level() {

    
    const {data:dataLevel, isFetching:isFetchingLevel} = useGetLevelQuery({refetchOnMountOrArgChange: true});
 

    const { level_x } = useParams()


    useEffect(() => {
        console.log({dataLevel,level_x})
        if (dataLevel && dataLevel.data && dataLevel.data.level <level_x){
            //window.alert("Este nivel no te corresponde")
            //window.location = "/levels"
        }
    },[dataLevel])


    const levelsData = [
        {
            title: "Nivel 0",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            time: 5000
        },

        {
            title: "Nivel 1",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img1,
            time:5000
        },
        {
            title: "Nivel 2",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img2,
        },
        {
            title: "Nivel 3",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img3,
        },

        {
            title: "Nivel 4",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img4,
        },
        {
            title: "Nivel 5",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img5,
        },
        {
            title: "Nivel 6",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img6,
        },

        {
            title: "Nivel 7",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img7,
        },
        {
            title: "Nivel 8",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img8,
        },
        {
            title: "Nivel 9",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img9,
        },

        {
            title: "Nivel 10",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img10,
        },
        {
            title: "Nivel 11",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img11,
        },
        {
            title: "Nivel 12",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img12,
        },

        {
            title: "Nivel 13",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img13,
        },
        {
            title: "Nivel 14",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img14,
        },
        {
            title: "Nivel 15",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img15,
        },

        {
            title: "Nivel 16",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img16,
        },
        {
            title: "Nivel 17",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img17,
        },
        {
            title: "Nivel 18",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img18,
        },

        {
            title: "Nivel 19",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img19,
        },
        {
            title: "Nivel 20",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img20,
        },
        {
            title: "Nivel 21",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img21,
        },

        {
            title: "Nivel 22",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img22,
        },
        {
            title: "Nivel 23",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img23,
        },
        {
            title: "Nivel 24",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img24,
        },

        {
            title: "Nivel 25",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img25,
        },
        {
            title: "Nivel 26",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img26,
        },
        {
            title: "Nivel 27",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img27,
        },

        {
            title: "Nivel 28",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/144952248?h=f60c4e1a56&autoplay=1",
            level_img: img28,
        },
        {
            title: "Nivel 29",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img29,
        },
        {
            title: "Nivel 30",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/129920646?h=398078a945",
            level_img: img30,
        },
    ]

    const info = levelsData[level_x]

    const [state, setState] = useState(true);
    const [card, setCard] = useState(0);
    

    console.log(info.time)

    return (
        <div className='w-full h-full'>
            
            <div className="flex justify-end"><button onClick={event =>  window.location.href='../dinosaurios/1'}><img src="../src/assets/images/levels/mas 2.png" className="mt-16 mr-8 h-12 w-20"></img></button></div>
            {(card == 0 && info) &&
                <div className='border-solid border-yellow-100 border-100 w-full flex flex-col justify-center items-center'>
                    <h1 className='mb-4 font-raleway text-white text-[60px]'>{info.title ?? ""}</h1>
                    
                    <div className="w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                        <img src={info.level_img ?? ""} ></img>
                        <button className='bg-white mt-14 opacity-65 text-[25px] text-zinc-500 px-8 py-2 rounded mb-12 border border-black' onClick={() => setCard(1)} >Iniciar meditación</button></div></div>}

            {card == 1 && <div className='w-full items-center fixed top-0 left-0 w-full h-full flex-center flex-column justify-center z-20 bg-black'>
                <div className="relative;"><iframe className="absolute top-0 left-0 w-full h-full" src={info.link_video} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                <LoadNextPageButton time={0 || info.time} /></div>
                </div>}

        
            {
                !info && <div>No existe datos del nivel</div>
            }


        </div >
    )
}

export default Level