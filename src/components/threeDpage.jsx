import React from 'react';
import './threeDpage.css';

import { Canvas } from 'react-three-fiber';
//import { BoxBufferGeometry } from 'three';

const ThreeDpage = () => {
  return (
    <div>
      <h2>3D Page</h2>
      <Canvas>
        <mesh>
          <boxBufferGeometry
            attach='geometry'
            arcs={[1, 1, 1]}
          />
        </mesh>
      </Canvas>
    </div>
  )
}

export default ThreeDpage;