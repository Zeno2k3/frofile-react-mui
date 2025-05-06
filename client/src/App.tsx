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
import { NavigationProvider } from "./context/NavigationContext";

const Section = [
  {
    id: "home",
    title: "Home",
    component: <HomeComponent />,
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
  },
];

function App() {
  return (
    <>
      <NavigationProvider sections={Section}>
        <HeaderComponent />
        <SmoothScroll sections={Section} />
      </NavigationProvider>
    </>
  );
}

export default App;
