import {
  AboutComponent,
  ContactComponent,
  HeaderComponent,
  HomeComponent,
  ShowProject,
  SkillComponent,
  TimeLineComponent,
} from "./layout/index";
import SmoothScroll from "./layout/SmoothScroll";

const Section = [{
  id: "home",
  title: "Home",
  component: <HomeComponent/>,
},
{
  id: "about",
  title: "About",
  component: <AboutComponent />,
},
{
  id: "timeline",
  title: "Timeline",
  component: <TimeLineComponent />,
},
{
  id: "skill",
  title: "Skill",
  component: <SkillComponent />,
},
{
  id: "project",
  title: "Project",
  component: <ShowProject />,
},
{
  id: "contact",
  title: "Contact",
  component: <ContactComponent />,
}]

function App() {
  return (
    <>
      <HeaderComponent />
      <SmoothScroll sections={Section} />
    </>
  );
}

export default App;