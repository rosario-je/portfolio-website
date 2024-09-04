import "./App.css";
import { Landing } from "./assets/Pages/Landing";

function App() {
  return (
    <div className="bg-slate-700 h-screen">
      <div className="xl:mx-[300px] md:mx-[150px] sm:mx-[75px] mx-[20px] bg-darkmode-background h-screen">
        <Landing />
      </div>
    </div>
  );
}

export default App;
