import React from 'react';
import './threeDpage.css';

import { Canvas } from 'react-three-fiber';

const Box = () => {
  return (
    <mesh>
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <meshBasicMaterial attach='material' color='blue' />
    </mesh>
  )
}

const ThreeDpage = () => {
  return (
    <div>
      <h2>3D Page</h2>
      <Canvas>
        <Box />
      </Canvas>
    </div>
  )
}

export default ThreeDpage;