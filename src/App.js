import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Components/MainSection/SectionStructure/Header';
import Footer from './Components/MainSection/SectionStructure/Footer'; 
import MainSection from './Components/MainSection/MainSection';
import CompletePlayer from './Components/Video-Section-Components/CompletePlayer';
import React from 'react';

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
    name: 'Beauty Nebula',
    description: `Our Universe's Artistic Expression`,
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
    name: 'Beauty Nebula',
    description: `Our Universe's Artistic Expression`,
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
    name: 'Beauty Nebula',
    description: `Our Universe's Artistic Expression`,
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
        <Switch>
          <Route exact path='/'>
              <MainSection videoAssets={assets}/>
          </Route>
          <Route  path='/videos/:id'>
              <CompletePlayer videos={assets}/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
    </React.Fragment>

  );
}

export default App;
