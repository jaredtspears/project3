import React from 'react'
import Profile from '../components/MainPgComponents/Profile/profile'
import "../components/MainPgComponents/Profile/profile.css"
import Footer from '../components/MainPgComponents/Footer/footer'
import Parallax from '../svg _background_files/rellax';
import LoggedInRendering from '../components/MainPgComponents/NavTabs/loggedInRendering'

function MainPg() {
  return (
    <div className="mainContainer">
    <LoggedInRendering/>
    <Parallax className="SVG"/>
      <Profile className= "profile" />
       
      <br></br>
      <Footer />
    
    </div>

  )
}


export default MainPg
