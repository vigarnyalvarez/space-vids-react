import React from "react";
import VideoPane from "./VideoSection/VideoPane";
import CommentSection from "./CommentSection/CommentSection";
import RelatedVideos from "./RelatedContentSection/RelatedVideos";
import { useParams } from 'react-router-dom'


const CompletePlayer = ({videos}) => {
    
    const {id} = useParams();
    const video = videos.find(element => `${element.id}` === id)
    const { name, tag, location, comments } = video;
    return(
        <React.Fragment>
            <div className="flex flex-wrap items-center justify-around bt">
                <VideoPane name={name} location={location}/>
                <CommentSection commentArray={comments}/>
            </div>
            <RelatedVideos tag={tag}/>
        </React.Fragment>
    )
}

export default CompletePlayer;