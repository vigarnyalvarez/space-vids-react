import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
//import "./cards.css"


const Cards = ({ video }) => {
    const { name, description, image } = video;
    
    return(
        <Card sx={{ width:250, height:300}} className="ma3">
            <CardActionArea>
                <CardMedia component="img" height="150"  image={image} alt="green iguana"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards;
