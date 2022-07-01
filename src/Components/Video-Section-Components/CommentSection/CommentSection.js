import {React, useState} from "react";
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'
import CommentBox from "./CommentBox/CommentBox"
import CommentView from "./CommentView/CommentView";




const CommentSection = ({commentArray}) => {
    const [comments, setComments] = useState(commentArray)
    const [open, setOpen] = useState(true);

    const addComment = (user, comment) => {
        const commentsToModify = [...comments, {user: user, comment: comment}];
        setComments(commentsToModify);
    }

    return(
        <div className="flex flex-column pa3 justify-around">
            <Button onClick={() => setOpen(!open)} aria-controls="comment-box" aria-expanded={open}>Hide / Unhide Comments</Button>
            <div className="justify-around">
            <Collapse in={open}>
                <div id="comment-box">
                    <CommentView comments={comments}/>
                </div>
            </Collapse>
            <CommentBox commentAction={addComment}/>
        </div>
        </div>
    )
}
export default CommentSection