import Slide1 from "../../assets/img/slider/1.jpg";
import Slide2 from "../../assets/img/slider/2.jpg";
import Slide3 from "../../assets/img/slider/3.jpg";
import Slide4 from "../../assets/img/slider/4.jpg";
import Slide5 from "../../assets/img/slider/5.jpg";
import Slide6 from "../../assets/img/slider/6.jpg";
import Slide7 from "../../assets/img/slider/7.jpg";
import Slide8 from "../../assets/img/slider/8.jpg";
import Slide9 from "../../assets/img/slider/9.jpg";
import Slide10 from "../../assets/img/slider/10.jpg";
import ImageFirstSection1 from "../../assets/img/home-section-1-1.jpg";
import ImageFirstSection2 from "../../assets/img/home-section-1-2.jpg";
import ImageSecondSection1 from "../../assets/img/home-section-2-1.jpg";
import ImageSecondSection2 from "../../assets/img/home-section-2-2.jpg";
import Slider from "../../components/Slider/Slider";
import Section from "../../components/Section/Section";

const sliderData = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10]

const sections = [{
  title: 'ut aliquip ex ea commodo consequat',
  images: [ImageFirstSection1, ImageFirstSection2],
  columns: [{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: '<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: '<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>',
  }]
}, {
  title: 'ut aliquip ex ea commodo consequat',
  images: [ImageSecondSection1, ImageSecondSection2],
  columns: [{
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: '<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: '<p>Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>',
  }]
}];

function HomePage() {
  return (
    <div className="HomePage">
      <Section data={sections[0]}/>
      <Slider data={sliderData}/>
      <Section data={sections[1]}/>
    </div>
  );
}

export default HomePage;
