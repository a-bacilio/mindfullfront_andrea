import React, { useState } from 'react'
import { useParams } from 'react-router'


function Level() {

    
    const { level_x } = useParams()

    const levelsData = [
        {
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },
        {
            video:{

            },
            audio:{
                
            }
        },
        {
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },
        {
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },
        {
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },
        {
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        },{
            title:"Meditacion 1",
            text:"Lorem ipsum, text 2",
            duration: 300,
            link: "https://player.vimeo.com/video/810735707"
        }
    ]

    const info = levelsData[level_x]

    const  [state,setState] = useState(true);

    return (
        < div >
            <div className='w-full items-center'>
                <h1 className='text-2xl text-bold text-white text-center mt-5'>Nivel {Number(level_x) +1}</h1>
                <h2>{info.title ?? "Titulo en blanco"}</h2>
                <p>{info.text ?? "Cuerpo del texto"}</p>
                <iframe title="vimeo-player" src={(info.link ?? "https://player.vimeo.com/video/821101511")+"?autoplay=1&byline=0&portrait=0&playsinline=0"} width="640" height="360" frameborder="0"    allowfullscreen></iframe>
                <button onClick={()=>setState(!state)} >Haz clic {String(state)}</button>
            </div>
        </div >
    )
}

export default Level