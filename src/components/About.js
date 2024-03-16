import React from "react";
import "./About.css";
import "../App.css";
import { Div } from "../elements/Div";
import mypic from "../images/contact.png";
import { FadeIn, SlideInLeft, SlideInUp} from "react-animated-components";



export const About=()=>{
   

    return (
        <Div>
            <div className="container" id="About">
                <div className="row">
                    <div className="col__2">
                        {/* <FadeIn durationMs={3000}>
                            <img className="about_img" src={mypic}/>
                        </FadeIn> */}
                        {/* <div className="col__2"> */}
                    <img src={mypic} alt="" className="about_img" />
                {/* </div> */}
                    </div>
                    <div className="col__2">
                        <SlideInLeft durationMs={1000}> 
                            <h1 className="aboutMe">Profile Summary</h1>
                        </SlideInLeft>
                 
                        <SlideInUp durationMs={1000}>
                            <p className="p__color about_detail">
                            Skilled Java developer with expertise in Java, Spring Boot, MySQL, WebFlux, and Hibernate.
                             With 2 years of experience, I have successfully delivered high-quality software solutions in various projects.
                              Proficient in problem-solving, I thrive in dynamic environments and enjoy collaborating with multidisciplinary teams. 
                              Dedicated to continuous learning, I stay abreast of emerging technologies and industry trends.
                               Seeking new opportunities to apply my skills and contribute to impactful projects in the software development field.

                            </p>
                        </SlideInUp>
                        {/* <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        Experience in constructing RESTful APIs to facilitate smooth prize redemption processes
through Java and Spring Boot, thereby elevating user satisfaction levels.                        </p>
                        </SlideInUp>
                        <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        Acknowledged for fortifying application security by integrating industry standard authentication
protocols into Login and Signup APIs, ensuring robust data protection.                      </p>
                        </SlideInUp>
                        <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        Collaborate cross functionally with teams to drive project success, ensuring seamless
integration of frontend and backend components for enhanced application stability and
performance.                      </p>
                        </SlideInUp>
                        <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        Proficient in crafting JUnit test cases to validate the precision and consistency of diverse APIs.                      </p>
                        </SlideInUp> */}
                        {/* <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        
Possessing in depth expertise in seamlessly integrating third party APIs to facilitate secure
transactions and streamline payment gateway interactions, thereby optimizing
operational efficiency.                     </p>
                        </SlideInUp> */}
                        {/* <SlideInUp durationMs={1000}>
                        <p className="p__color about_detail">
                        Collaborate cross functionally with teams to drive project success, ensuring seamless
integration of frontend and backend components for enhanced application stability and
performance.          </p>
                        </SlideInUp> */}
                      
                       
                        <div className="aboutButton d__flex align__items__center">
                            < a href = "https://drive.google.com/file/d/1_234wwTzZJ__cSF8nAU17pGBXqb9id4P/view?usp=sharing" target={"_blank"}> < button className = "about_btn" > Download Resume </button></a >
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}