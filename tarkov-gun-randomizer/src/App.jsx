import GunBuilder from "./components/GunBuilder";
import Sidebar from "./components/Sidebar";
import "./index.css";
import ParallaxBackground from "./components/ParallaxBackground";
import { AppProvider } from "./AppContext";

function App() {
  return (
    <AppProvider>
      <div className='main-container'>
        <ParallaxBackground />
        <Sidebar />
        <GunBuilder />
      </div>
    </AppProvider>
  );
}

export default App;
