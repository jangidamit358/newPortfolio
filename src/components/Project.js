import "./Project.css";
import "../App.css"
import Project1 from '../images/project1.png';
import Project2 from '../images/project2.png';
import Project3 from '../images/recipe.png';
import Project4 from '../images/news.png';
import Project5 from '../images/weather.png';

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading projectText">PROJECTS</h1>
        <p className="heading p__color">
          {/* These contain both colaborative and solo projects as well. */}
        </p>        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <h4 className="project__text">Clone of Flipkart</h4>
                     <h5 className="project__text">Pepperfry is an e-commerce website selling all tpye of products. Here the user can browse products and added them to their cart. They can proceed to checkout by filling in their address and payment info.</h5>
                     <h5 className="project__text">Tech stack: HTML, CSS, HTML, NodeJS, JavaScript, MongoDB</h5>
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <a href="https://github.com/jangidamit358/Flipkart-Clone" target={"_blank"} className="project__btn">View Details</a>
                     <a href="https://copyflipcart.netlify.app/" target={"_blank"} className="project__btn">Deployed</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <h4 className="project__text">Clone of HOK MakeUp</h4>
                     <h5 className="project__text">Pepperfry is an e-commerce website selling makeup products. Here the user can browse products and added them to their cart. They can proceed to checkout by filling in their address and payment info.</h5>
                     <h5 className="project__text">Tech stack: HTML, CSS, JavaScript</h5>
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">                     
                     <a href="https://github.com/jangidamit358/Clone-of-HOKmakeup" target={"_blank"} className="project__btn">View Details</a>
                     <a href="https://thirsty-goldstine-ea42fc.netlify.app/" target={"_blank"} className="project__btn">Deployed</a>
                     </div>
                 </div>
             </div>


                       </div>
       </div>
    </div>
  );
}

export default Project;
