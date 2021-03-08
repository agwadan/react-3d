import React, { useState, useRef } from 'react';
import './threeDpage.css';

import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three'; //--- a is shortcut for animated.
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  })

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Box = () => {

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [3, 3, 3] : [1.5, 1.5, 1.5],
    color: hovered ? 'blue' : 'gray'
  })

  return (
    <a.mesh
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
        <Controls />
        <Box />
      </Canvas>
    </div>
  )
}

export default ThreeDpage;