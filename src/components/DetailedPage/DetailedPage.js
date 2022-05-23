import React from 'react';
import PropTypes from 'prop-types';
import styles from './DetailedPage.scss';

import PPortoImage from '../../assets/pporto.jpg';
import GlookastImage from '../../assets/glookast.jpg';
import HelppierImage from '../../assets/helppier.jpg';


function DetailedPage(props) {

  //  (removed paragraph) I grew up in a small city named Silves and at 18 years old moved away to Porto where I studied my Undergraduate degree and had professional experiences.

  return (
    <div className={props.exitPage ? "DetailedPage Exit" : "DetailedPage"}>
      <div className='DetailedPageContainer'>
        <div className='DetailedPageWrapper'>
          <span>
            Hi! My name is Alexandre Costa and I was born in Algarve, Portugal and (I'm currently 24 years old)
            I enjoy being a web developer because it allows me to train my brain and logic while having the ability to create powerful tools that can help other people.
            In my free time I enjoy playing the violin, going for walks and taking/editing photos.
          </span>
          <div className='DetailsGrid'>
            <img src={PPortoImage} alt="Porto Polytechnic"></img>
            <span>After finishing the highschool professional course on Multimedia Technician, where I learned the basics of programming, I decided to focus on that field and took the bachelors degree in Technologies and Information Systems for Web.
              On this course, I learned everything related to developing a Web app: from the UML diagrams and designing the user interface to developing the actual app using diverse programming languages.
              Apart from that I also learned about other topics, such as: developing games, 2D and 3D animations, editing images and creating vector shapes.</span>
            <img src={HelppierImage} alt="Helppier"></img>
            <span>I did an internship for 4 months at the company Helppier as a unit of my degree. This was the first time working professionally, developing a web app with a team of professional developers.
              The company was a startup and developed an app with the same name. During my internship I did tasks such as creating generic components for the app and developing interfaces based on mockups created by the designer in the company, using mostly React.
            </span>
            <img src={GlookastImage} alt="Glookast"></img>
            <span>At Glookast I had my first professional experience after taking my degree. For 1 year and 10 months I helped develop several softwares made by the company.
             The tasks I had more often were: implementing new features, fixing bugs, refactoring code, testing components and using api requests to get, input and update information. Using Angular and many other technologies, I was able to do the tasks I was asked to while learning with the rest of the development team.
             </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedPage;
