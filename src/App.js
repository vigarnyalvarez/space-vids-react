import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/MainSection/SectionStructure/Header';
import Footer from './Components/MainSection/SectionStructure/Footer'; 
import MainSection from './Components/MainSection/MainSection';
import CompletePlayer from './Components/Video-Section-Components/CompletePlayer';
import SignUp from './Components/Authentication/SignUp';
import  Container  from 'react-bootstrap/Container';
import { AuthProvider } from './Components/contexts/AuthContext';
import Login from './Components/Authentication/Login';
import PrivateRoute from './Components/PrivateRoute';


export const assets = [
  {
    id:1,
    name: 'Journey To The Unknown',
    description: `Mankind's Most Exciting Adventure`,
    tag:'atmos',
    location: '/assets/Atmos_8.mp4',
    image: '/assets/unknown-journey.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
  {
    id:2,
    name: 'Celestial Voyage',
    description: 'To Feel Humble Of Your Position In The Universe',
    tag:'atmos',
    location: '/assets/Atmos_9.mp4',
    image: '/assets/celestial-voyage.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
  {
    id:3,
    name: 'Beauty Nebula',
    description: `Our Universe's Artistic Expression`,
    tag:'atmos',
    location: '/assets/Atmos_9.mp4',
    image: '/assets/beauty-nebula.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
  {
    id:4,
    name: 'Into The Depths Of The Universe',
    description: `Expanding Our Knowledge of the Universe`,
    tag:'nebula',
    location: '/assets/Atmos_9.mp4',
    image: '/assets/particle-dancing-1.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
  {
    id:5,
    name: 'Dancing Stars',
    description: `Beautiful Patterns Of Our Marvelous Galaxy`,
    tag:'nebula',
    location: '/assets/Atmos_9.mp4',
    image: '/assets/particle-dancing-2.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
  {
    id:6,
    name: `Milky Way's Sights`,
    description: `Best Of Our Amazing Galaxy`,
    tag:'nebula',
    location: '/assets/Atmos_9.mp4',
    image: '/assets/particle-dancing-3.jpg',
    playTime: '0:20',
    comments:[
      {
        user: 'Mike',
        comment: "Excellent Video"
      },
      {
          user: 'Manuel',
          comment: "Amazing art!"
      },
    ]
  },
]

function App() {
   return (
     <React.Fragment>
       <Header text={'SpaceVids!'}/>
       <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path='/' component={MainSection}>
                <MainSection videoAssets={assets}/>
            </PrivateRoute>
            <PrivateRoute path='/videos/:id'>
                <CompletePlayer videos={assets}/>
            </PrivateRoute>
            <Route path='/signup'>
                <Container className="d-flex align-items-center justify-content-center bb bt" style={{ minHeight: "100vh" }}>
                  <SignUp/>
                </Container>
            </Route>
            <Route path='/login'>
                <Container className="d-flex align-items-center justify-content-center bb bt" style={{ minHeight: "100vh" }}>
                  <Login/>
                </Container>
            </Route>
          </Switch>
         </AuthProvider>
       </Router>
       <Footer/>
     </React.Fragment>
  );
}

export default App;
