import React, { useEffect, useRef } from "react";
import DustParticles from "./DustParticles";
import Parallax from "parallax-js";

const ParallaxBackground = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneRef.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    return () => parallaxInstance.destroy();
  }, []);

  return (
    <div ref={sceneRef} id='scene'>
      <div data-depth='0.4'>
        <div className='bg-img'></div>
      </div>
      <div data-depth='0.2'>
        <DustParticles />
      </div>
    </div>
  );
};

export default ParallaxBackground;
