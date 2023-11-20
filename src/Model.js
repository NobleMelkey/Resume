import React from "react";
import "./Modelstyl.css";
import img1 from'./IMG-20230621-WA0018 (1).jpg';
import pdf from './NobleMelchizedek.resum.pdf';
function Model(){
    return(
        
  <div class="container">
    <div class="profile">
      <div class="profile_container">
        <div class="profile_profileImg">
        <img className="image" src={img1} alt="noble"></img>
          
        </div>
        <div>
          <h1 class="profile_name">
            <span class="profile_name_firstName"><b>noble</b></span>
            <span class="profile_name_lastName">Melchizedek</span>
          </h1>
          <p class="profile_title">Full-stack Developer</p>
          <h2 style={{width:'100%', height:'2px' , backgroundColor:"black"}}></h2>
          <p class="description profile_description">
          Seeking an entry level position to begin my career in a professional
environment to secure employment with a reputable company , To Secure
a responsible opportunity , where I can fully utilize my Education, Training ,
Human recourse and Management skills, while making significant
contribution to the success of my Employer.
          </p>
          <a class="downloadBtn" href="./cv.pdf" download={pdf}>Download Resume</a>
        </div>
      </div>
    </div>
    <div class="group-1">
      <div class="skills">
        <h3 class="title">TECHNICAL SKILLS</h3>
        <ul class="skills_list description">
          <li>Java</li>
          <li>JavaScript</li>
          <li>HTML, CSS</li>
          <li>React JS</li>
          <li>Mongo DB</li>
        </ul>
      </div>
      <div class="skills">
        <h3 class="title">TOOLS</h3>
        <ul class="skills_list description">
          <li>VS Code</li>
          <li>GitHub</li>
          <li>Eclipse</li>
          
        </ul>
      </div>
      

      <div class="edu">
        <h3 class="title">Education</h3>
        <div class="edu_item">
          <p class="item_preTitle">2020-2023</p>
          <h4 class="item_title">Bachelor of Engineering in Electrical and Electronics Engineering </h4>
          <h4>CGPA-7.2</h4>
          <p class="item_subtitle">
          Jansons institute of technology Coimbatore
          </p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2017-2020</p>
          <h4 class="item_title">Diploma in Electrical and Electronics Engineering</h4>
          <h4>89%</h4>
          <p class="item_subtitle">
          MSPVL polytechnic college Pavoorchatram

          </p>
        </div>
        <div class="edu_item">
          <p class="item_preTitle">2017</p>
          <h4 class="item_title">SSLC</h4>
          <h4>74%%</h4>
          <p class="item_subtitle">
          SPIC Nagar Hr.Sec School

          </p>
        </div>
      </div>

      <div class="certification">
        <h3 class="title">certification</h3>
        <div class="certification_item">
          <p class="item_preTitle">2018</p>
          <h4 class="item_title">Divitional level Shuttle</h4>
          <p class="description">
            place a first place in Divitional level compadition in both singles and doubles match in shuttle
          </p>
        </div>
      </div>
    </div>
    <div class="group-2">
      <div class="exp">
        <h3 class="title">Work Experience</h3>
        <div class="exp_item">
          <p class="item_preTitle">March-May2022(3 months)</p>
          <h4 class="item_title">♥Zinnov:Global ManagementConsulting</h4>
          <p class="item_subtitle">Market Research-Intern</p>
          <p class=" description">
          ➢My responsibilities are doing researchof all verticals to collectdetails about the Priority
initiatives and innovation.
Worked in team project called IBM with the BusinessIntention team.
          </p>
        </div>
        <div class="exp_item">
          <p class="item_preTitle">may- 10 days- 2019</p>
          <h4 class="item_title">♥Spic , Thoothukudi - 628005</h4>
          <p class="item_subtitle">Maintenance</p>
          <p class="description">
          ➢i I have done a work of maintaining the Motor winding
Replacing the coil of the Transformer
maintaining the Generator
Taking the reading in Acid plant
          </p>
        </div>
        <div class="exp_item">
          <p class="item_preTitle">May-2022</p>
          <h4 class="item_title">♥EB-THOOTHUKUDI</h4>
          <p class="item_subtitle">Maintenance</p>
          <p class="description">
          ➢IN-Plant Training in Electrical Department of Southern Petrochemical Industries
Corporation Limited , Tuticorin.
          </p>
        </div>
        
      </div>
      <h2 style={{width:'100%', height:'2px' , backgroundColor:"black"}}></h2>
      <div class="awards">
        <h3 class="title">Courses</h3>
        <div class="awards_item">
          <p class="item_preTitle">2023-present</p>
          <h4 class="item_title">♥Full Stack Developement Courses</h4>
          <p class=" description">
          Course in Imarticus Learning<br></br>➢April-2023 to Jan 2024 current
JAVA , HTML ,CSS ,JAVA SCRIPT, React.js
Programming Codes Debugging and executing in coimbatore
          </p>
        </div>
        <div class="awards_item">
          <p class="item_preTitle">2022</p>
          <h4 class="item_title">♥Diploma in Fitness.</h4>
          <p class="description">
          ➢Diplome in Advanced Fitness in Fab Academy Fabulous Body Inc Califarnia ,United States
          </p>
        </div>
      </div>
      <h2 style={{width:'100%', height:'2px' , backgroundColor:"black"}}></h2>
      <div class="awards">
        <h3 class="title">Project Done</h3>
        <div class="awards_item">
          <p class="item_preTitle">2023-Project on Progress</p>
          <h4 class="item_title">♥Full Stack Developement </h4>
          <p class=" description">
          in Imarticus Learning<br></br>➢Using Frontend: Reactjs , Backend: NodeJS, Database: MongoDB
          </p>
        </div>
        <div class="awards_item">
          <p class="item_preTitle">2022</p>
          <h4 class="item_title">♥RFID BASED VEHICLE TRACKING SYSTEM</h4>
          <p class="description">
          ➢for COAL MINES
          </p>
        </div>
      </div>
      <h2 style={{width:'100%', height:'2px' , backgroundColor:"black"}}></h2>

      <div class="interest">
        <h3 class="title">Interest</h3>
        <div class="interest_items">
          <div class="interest_item">
            <i data-feather="music"></i>
            <span>•GYM</span>
          </div>
          <div class="interest_item">
            <i data-feather="book"></i>
            <span>•Swiming</span>
          </div>
          <div class="interest_item">
            <i data-feather="map"></i>
            <span>•Travel</span>
          </div>
          <div class="interest_item">
            <i data-feather="map"></i>
            <span>•Gaming</span>
          </div>
        </div>

      </div>
    </div>
    
    <div class="group-3">
      <div class="contact">
        <h3 class="title">Contact</h3>
        <div class="contact_info">
          <p class="description">
            Thoothukudi, coimbatore
          </p>
          <p class="description">
          ☏  8072586621
          </p>
          <p class="description">
            noblesam66@gmail.com
          </p>
        </div>
      </div>
      <div class="social">
        <h3 class="title">Socials</h3>
        <div class="social_items">
          <a href="#" target="_b" class="social_item">
            <i data-feather="github"></i>
            <span><b>GitHub:</b>/NobleMelkey</span>
          </a>
          <a href="#" target="_blank" class="social_item">
            <i data-feather="twitter"></i>
            <span><b>Linkedin:</b>https://www.linkedin.com/in/noble-melchizedek-b91b351a4</span>
          </a>
          <a href="#" target="_blank" class="social_item">
            <i data-feather="linkedin"></i>
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Model;