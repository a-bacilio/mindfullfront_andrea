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
import dinosaurio1 from "../assets/images/levels/all3.png"
import dinosaurio2 from "../assets/images/levels/frame2.png"
import dinosaurio3 from "../assets/images/levels/frame3.png"
import dinosaurio4 from "../assets/images/levels/frame4.png"
import dinosaurio5 from "../assets/images/levels/frame5.png"
import dinosaurio6 from "../assets/images/levels/frame6.2.png"
import plus_logo from "../assets/images/levels/mas 2.png"
import { useGetLevelQuery } from '../app/redux/querys/authquerys'
import LoadNextPageButton from '../components/LoadNextPageButton'
import CountdownTimer from '../components/CountdownTimer'


function Level() {


    const { data: dataLevel, isFetching: isFetchingLevel, refetch } = useGetLevelQuery({ refetchOnMountOrArgChange: true });


    const { level_x } = useParams()


    useEffect(() => {
        refetch();
        
        if (!(Number(level_x) === parseInt(level_x) )||(dataLevel && dataLevel != "undefined" && dataLevel != undefined && dataLevel.data && dataLevel.data.level < level_x) || Number(level_x)<=0 || Number(level_x)>10 ) {
            window.alert("Este nivel no te corresponde")
            window.location = "/levels"
        } else if (dataLevel && dataLevel != "undefined" && dataLevel != undefined && dataLevel.data && dataLevel.data.level > level_x && card == 0) {
            setCard(0)
        }

    }, [dataLevel])


    const levelsData = [
        {
            title: "No hay nivel 0",
            text: "Lorem ipsum, text 2",
            link_video: "",
            time: 0,
            image_width: "w-48",
        },
        {
            title: "Nivel 1",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1034888072",
            level_img: img1,
            image_width: "w-48",
            time: 1000*(3*60+23)
        },
        {
            title: "Nivel 2",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1034888084",
            level_img: img6,
            image_width: "w-48",
            time: 1000*(3*60+3)
        },
        {
            title: "Nivel 3",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1034888099",
            level_img: img7,
            image_width: "w-48",
            time: 1000*(3*60+22)
        },

        {
            title: "Nivel 4",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1034900068",
            level_img: img12,
            image_width: "w-48",
            time: 1000*(2*60+44)
        },
        {
            title: "Nivel 5",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961219?h=d671f1a3c9",
            level_img: img13,
            image_width: "w-48",
            time: 5000
        },
        {
            title: "Nivel 6",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961269?h=24065ae572",
            level_img: img18,
            image_width: "w-48",
        },

        {
            title: "Nivel 7",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961339?h=3e13554177",
            level_img: img19,
            image_width: "w-48",
        },
        {
            title: "Nivel 8",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961339?h=3e13554177",
            level_img: img24,
            image_width: "w-48",
        },
        {
            title: "Nivel 9",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961339?h=3e13554177",
            level_img: img25,
            image_width: "w-48",
        },

        {
            title: "Nivel 10",
            text: "Lorem ipsum, text 2",
            link_video: "https://player.vimeo.com/video/1025961339?h=3e13554177",
            level_img: img30,
            image_width: "w-48",
        }
    ]

    const info = levelsData[level_x]

    const base_time = 6*60*60;

    const [card, setCard] = useState(0);

    const currentLevel = Number(level_x); // Ensure level_x is a number

    

    return (
        <div className='w-full h-full pt-8'>
            
            {((card == 1 || card ==0) && info) && <div className="flex justify-end"><button onClick={() => setCard(3)}><img src={plus_logo} className="mt-8 mr-8 h-12 w-20"></img></button></div>}

            {(card == 0 && info) &&
                <div className='border-solid border-yellow-100 border-100 w-full flex flex-col justify-center items-center'>
                    <h1 className='mb-4 font-raleway text-white text-[60px]'>{info.title ?? ""}</h1>

                    <div className="w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                        <img src={info.level_img ?? ""} ></img>
                        {dataLevel && dataLevel.data && dataLevel.data.time_passed &&<> <CountdownTimer
                                initialTime={(base_time - Number(dataLevel && dataLevel.data && dataLevel.data.time_passed))} availableLevel={Number(dataLevel && dataLevel.data && dataLevel.data.level) > Number(level_x)} setCard={setCard} /></>}
                        </div></div>
            }


            {card == 2 && <div className='w-full items-center fixed top-0 left-0 w-full h-full flex-center flex-column justify-center z-20 bg-black'>
                <div className="relative;"><iframe className="absolute top-0 left-0 w-full h-full" src={info.link_video} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    {dataLevel && dataLevel.data && dataLevel.data.level && <LoadNextPageButton refetchFn={refetch} time={info.time || 0} level={dataLevel && dataLevel.data && dataLevel.data.level} setCard={setCard} level_x={level_x} />}
                        </div>
            </div>}

            {(card == 3 && info && dataLevel && dataLevel.data && dataLevel.data.level) &&
                <div className='border-solid border-yellow-100 border-100 w-full flex flex-col justify-center items-center mt-2'>
                    <h1 className='mb-4 font-raleway text-white text-[60px]'></h1>

                    <div className="w-full sm:max-w-80 p-5 border-solid border-red border-100 pt-12 flex flex-col justify-center items-center" >
                        {dataLevel.data.level>0 && dataLevel.data.level<=2 && <img src={dinosaurio1}/>}
                        {dataLevel.data.level>2 && dataLevel.data.level<=4 && <img src={dinosaurio2}/>}
                        {dataLevel.data.level>4 && dataLevel.data.level<=6 && <img src={dinosaurio3}/>}
                        {dataLevel.data.level>6 && dataLevel.data.level<=8 && <img src={dinosaurio4}/>}
                        {dataLevel.data.level>8 && dataLevel.data.level<=9 && <img src={dinosaurio5}/>}
                        {dataLevel.data.level>=10 && <img src={dinosaurio6}/>}
                        
                        <button className='bg-white mt-14 opacity-35 text-[25px] text-zinc-500 
                        px-8 py-2 rounded mb-12 border border-black' onClick={()=>{setCard(0)}}
                        >Volver
                        </button></div></div>
            }

            {
                !info && <div>No existe datos del nivel</div>
            }


        </div >
    )
}

export default Level