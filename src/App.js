import React, { useState } from "react";
import "./App.scss";
import HomePage from "./components/HomePage/HomePage";
import DetailedPage from "./components/DetailedPage/DetailedPage";
import bgImage from "./assets/river-bg.png"
import RL from "../src/assets/AlexandreRecomendationLetter.pdf"
import CV from "../src/assets/AlexandreCostaCV.pdf"


// to create a new component: npx generate-react-cli component MyComponent

export default function App() {
  // for pages
  const home = "homePage";
  const detailed = "detailedPage";

  const [currentPage, changeCurrentPage] = useState(home);

  const [pageChanging, togglePageChanging] = useState(false); //  used just for the rotateButton boolean

  const [transitioning, toggleTransitioning] = useState(false);

  let rotateButton = (currentPage === home && pageChanging) || (currentPage !== home && !pageChanging)

  const changeToHomePage = () => {
    changeCurrentPage(home);
  }

  const changeToDetailedPage = () => {
    changeCurrentPage(detailed);
  }

  const togglePage = () => {
    toggleTransitioning(true);
    togglePageChanging(true);
    setTimeout(() => {
    if (currentPage === home) {
      changeToDetailedPage();
    } else {
      changeToHomePage();
    }
    togglePageChanging(false);
  }, 380);
  setTimeout(() => toggleTransitioning(false), 450);
  }

  return (
    <div className="App">
      <div id="bgImageParent">
        <img src={bgImage} id="bgImage" alt=""></img>
      </div>
      <div className="MainContainer">
        <div className="Body">
          <div className="Titles">
            <h1>Alexandre Costa</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="PageContainer">
            {currentPage === home ? (
              <HomePage expandPage={transitioning} invisible={currentPage !== home}></HomePage>
            ) : (
              <DetailedPage exitPage={transitioning}></DetailedPage>
            )}
          </div>
        </div>

        <div className="Footer">
          <div>
            <a href={RL} target="_blank" rel="noreferrer">Recommendation Letter</a>
            <a href={CV} target="_blank" rel="noreferrer">My CV</a>
            <a href="https://www.linkedin.com/in/alexandrecscosta/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>Contact Me: <a href="mailto:alexandrecscosta@outlook.com">alexandrecscosta@outlook.com</a></span>
          </div>
        </div>
      </div>
      <div className="PageButton">
        <span href="#" className={rotateButton ? 'Rotate' : ''} onClick={togglePage}>
          +
        </span>
      </div>
    </div>
  );
}

