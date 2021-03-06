import React from "react";
import {Link} from 'react-router-dom'
import Cards from "./SectionStructure/Cards";
import { assets } from "../../App";
import HeaderMain from "./SectionStructure/HeaderMain";

const MainSection = () => {
    
    return(
        <>
            <HeaderMain/>
            <div className="flex flex-wrap items-center justify-around bt bb">
                {assets.map((video) => 
                    <Link style={{textDecoration: 'none'}} key={video.id} to={`/videos/${video.id}`}>
                        <Cards key={video.id} video={video}/>
                    </Link>
                )}
            </div>
        </>
    )
}

export default MainSection;