import React from 'react';
import './threeDpage.css';

import { Canvas } from 'react-three-fiber';

const ThreeDpage = () => {
  return (
    <div>
      <h2>3D Page</h2>
      <Canvas>
        <mesh>

        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeDpage;