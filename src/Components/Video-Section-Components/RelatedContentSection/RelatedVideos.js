import React from "react";
import Cards from "../../MainSection/SectionStructure/Cards";
import { assets } from "../../../App";
import { Link } from "react-router-dom";

const RelatedVideos = ({tag}) => {
    const relatedArray = assets.filter(element => element.tag === tag);
    return(
        <div className="flex flex-wrap items-center justify-around bt bb">
            <div className="w-25 pa4 f2 ma4 flex-column-ns">
                Related Videos:
            </div>
            {relatedArray.map((video) => 
                <Link style={{textDecoration: 'none'}} key={video.id} to={`/videos/${video.id}`}>
                    <Cards key={video.id} video={video}/>
                </Link>
            )}
        </div>
    )
}

export default RelatedVideos;