import React from "react";
import {Link} from 'react-router-dom'
import Cards from "./SectionStructure/Cards";

const MainSection = ({videoAssets}) => {
    
    return(
            <div className="flex flex-wrap justify-around bt bb">
                {videoAssets.map((video) => 
                    <Link style={{textDecoration: 'none'}} key={video.id} to={`/videos/${video.id}`}>
                        <Cards key={video.id} video={video}/>
                    </Link>
                )}
            </div>
    )
}

export default MainSection;