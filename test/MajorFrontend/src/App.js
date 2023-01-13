import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import "./style.css";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SignUser from './components/pages/SignUser';
import Posts from './components/pages/Posts';
import SigninArtist from './components/pages/SigininArtist';
import ArtistDashboard from './components/pages/ArtistDasboard';
import Newpost from './components/pages/NewPost';
//import UserdashBoard from './components/pages/UserDashboard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/sign-up' component={SignUp}/>   
          <Route path='/sign-user' component={SignUser}/>   
          <Route path='/sign-in' component={SignIn}/> 
          <Route path='/artistDashboard' component={ArtistDashboard}/> 
          {/* <Route path='/carousel' component={Carousel}/>  */}
          <Route path='/posts' component={Posts}/>
          <Route path='/signinArtist' component={SigninArtist}/>
          <Route path='/artistdb' component={ArtistDashboard}/>
          <Route path='/newp' component={Newpost}/>
          <Route path='/showdata' component={Posts}/>
        </Switch>
      </Router>
    </> 
  );
}

export default App;
