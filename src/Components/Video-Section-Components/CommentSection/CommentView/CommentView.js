import React from "react";
import {ListGroup} from "react-bootstrap"

const CommentView = ({comments}) => {
    return(
        <ListGroup as="ol" className="pa2">
            {comments.map((comment, index) => 
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" key={index}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{comment.user}</div>
                        {comment.comment}
                    </div>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default CommentView;