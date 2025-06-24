import GunBuilder from "./components/GunBuilder";
import Sidebar from "./components/Sidebar";
import "./index.css";
import ParallaxBackground from "./components/ParallaxBackground";
import { AppProvider } from "./AppContext";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <AppProvider>
      <div className='main-container'>
        <ParallaxBackground />
        <Sidebar />
        <GunBuilder />
        <Analytics />
      </div>
    </AppProvider>
  );
}

export default App;
