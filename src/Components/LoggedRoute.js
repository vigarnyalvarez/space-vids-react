import React from 'react'
import MainSection from './MainSection/MainSection';
import CompletePlayer from './Video-Section-Components/CompletePlayer';
import { BrowserRouter as Route} from "react-router-dom";

const LoggedRoute = () => {

    return (
        <>
            <Route path='/main'>
                <MainSection/>
            </Route>
            <Route path='/videos/:id'>
                <CompletePlayer/>
            </Route>
        </>
 
    )
}

export default LoggedRoute;