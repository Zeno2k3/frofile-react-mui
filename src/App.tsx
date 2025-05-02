import {
  AboutComponent,
  ContactComponent,
  HeaderComponent,
  HomeComponent,
  ShowProject,
  SkillComponent,
  TimeLineComponent,
} from "./components/index";

function App() {
  return (
    <>
      <HeaderComponent />
      <HomeComponent />
      <AboutComponent />
      <TimeLineComponent />
      <SkillComponent />
      <ShowProject />
      <ContactComponent />
    </>
  );
}

export default App;
