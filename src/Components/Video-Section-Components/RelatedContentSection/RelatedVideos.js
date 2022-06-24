import React from "react";
import Cards from "../../MainSection/SectionStructure/Cards";
import { assets } from "../../../App";

const RelatedVideos = ({tag}) => {
    const relatedArray = assets.filter(element => element.tag === tag);
    return(
        <div className="flex flex-wrap items-center justify-around bt bb">
            <span className="w-25 pa4 f2 ma4 flex-column-ns">
                Related Videos:
            </span>
            {relatedArray.map((video) => <Cards key={video.id} video={video}/>)}
        </div>
    )
}

export default RelatedVideos;