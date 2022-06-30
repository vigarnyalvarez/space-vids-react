import React from "react"; 
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {

    const {currentUser} = useAuth();
    if(!currentUser){
        console.log('OJO')
    }
    return (
        <Route {...rest} render={({ location }) =>
            currentUser ? (children) : ( <Redirect to={{pathname: "/"}}/>)
        }/>
      );
    }

export default PrivateRoute;