import React, { useState, useRef } from 'react';
import './threeDpage.css';

import { Canvas, useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three'; //--- a is shortcut for animated.

const Box = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'blue' : 'gray'
  })

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  })

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <boxBufferGeometry attach='geometry' args={[1.5, 1.5, 1.5]} />
      <a.meshBasicMaterial attach='material' color={props.color} />
    </a.mesh>
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