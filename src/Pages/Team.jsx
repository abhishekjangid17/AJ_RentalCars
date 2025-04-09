import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import Person1 from "../images/team/1.png";
import Person2 from "../images/team/2.png";
import Person3 from "../images/team/3.png";
import Person4 from "../images/team/4.png";
import Person5 from "../images/team/5.png";
import Person6 from "../images/team/6.png";
import person from "../images/img2/me.jpg";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Luke Miller", job: "Salesman" },
    { img: Person2, name: "Michael Diaz", job: "Business Owner" },
    { img: Person3, name: "Briana Ross", job: "Photographer" },
    { img: Person4, name: "Lauren Rivera", job: "Car Detailist" },
    { img: Person5, name: "Martin Rizz", job: "Mechanic" },
    { img: Person6, name: "Caitlyn Hunt", job: "Menager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            <img src={person} style={{width: "500px"}}  />
            <p style={{fontSize:"25px", margin: " 50px" }} >Developer and designer of RJCar 
            <a href="">  <u style={{color: "Red", fontWeight:"bold", paddingLeft:"10px"}}> Portfolio</u></a>
           
            
            </p>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(123) 456-7869</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Team;
