import React from "react";
import "./cards.css"

const Cards = ({ video }) => {
    const { id, name, description, image, playTime } = video;

    return(
        <div className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-s w-25-l mw5 center">
            <img src={image} className="db w-100 br2 br--top img-card" alt=""/>
            <div className="pa2 ph4-ns pb2-ns">
                <div className="dt w-100 mt1">
                    <div className="dtc">
                        <h1 className="f5 f4-ns mv0">{name}</h1>
                    </div>
                    <div className="dtc tr">
                        <h2 className="f5 mv0">{playTime}</h2>
                    </div>
                </div>
                <p className="f6 lh-copy measure mt2 mid-gray">
                {description}.
                </p>
            </div>
        </div>
    )
}

export default Cards;