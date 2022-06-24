import React from "react";
import {Link} from 'react-router-dom'
import Cards from "./SectionStructure/Cards";

const MainSection = ({videoAssets}) => {
    
    return(
            <div className="flex flex-wrap items-center justify-around bt bb">
                {videoAssets.map((video) => 
                    <Link key={video.id} to={`/videos/${video.id}`}>
                        <Cards video={video}/>
                    </Link>
                )}
            </div>
    )
}

export default MainSection;