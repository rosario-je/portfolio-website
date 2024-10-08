import "./App.css";
import MainNavbar from "./assets/Components/MainNavbar";
import { About } from "./assets/Pages/About";
import { Contact } from "./assets/Pages/Contact";
import { Landing } from "./assets/Pages/Landing";
import { Projects } from "./assets/Pages/Projects";
import { Skills } from "./assets/Pages/Skills";

function App() {
  return (
    <div className="bg-darkmode-background overflow-x-hidden">
      <div className="2xl:mx-[300px] xl:mx-[200px] md:mx-[150px] sm:mx-[75px] mx-[20px] bg-darkmode-background scroll-smooth">
        <MainNavbar />
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;