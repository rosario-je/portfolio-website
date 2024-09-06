import "./App.css";
import MainNavbar from "./assets/Components/MainNavbar";
import { About } from "./assets/Pages/About";
import { Landing } from "./assets/Pages/Landing";
import { Skills } from "./assets/Pages/Skills";

function App() {
  return (
    <div className="bg-slate-700">
      <div className="xl:mx-[300px] md:mx-[150px] sm:mx-[75px] mx-[20px] bg-darkmode-background">
        <MainNavbar />
        <Landing />
        <About />
        <Skills />
      </div>
    </div>
  );
}

export default App;
