import React, { useState } from 'react';
import './threeDpage.css';

import { Canvas } from 'react-three-fiber';

const Box = () => {

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      <boxBufferGeometry attach='geometry' args={[1.5, 1.5, 1.5]} />
      <meshBasicMaterial attach='material' color={hovered ? 'blue' : 'gray'} />
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