import React, { useState, useRef, useEffect } from 'react';
import './threeDpage.css';

import { Canvas, extend, useFrame, useThree } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three'; //--- "a" is shortcut for animated.
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

extend({ OrbitControls });

const Car = () => {

  const [model, setModel] = useState();

  useEffect(() => {
    new GLTFLoader().load('/car_scene/scene.gltf', setModel);
  }, [])

  console.log(model);
  return (model ? <primitive object={model.scene} /> : null);
}

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  })

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 3} /* controls how much the 3d object can be rotated */
      minPolarAngle={Math.PI / 4} /* controls how much the 3d object can be rotated */
      args={[camera, gl.domElement]}
      ref={orbitRef}
    />
  )
}

const Plane = () => {
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -4, 0]}
      receiveShadow
    >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhysicalMaterial attach='material' color='#ffffff' />
    </mesh>
  )
}

const Box = () => {

  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'pink' : 'gray'
  })

  return (
    <a.mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow
    >
      <ambientLight />
      <spotLight position={[0, 10, 10]} penumbra={1} castShadow />
      <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
      <a.meshPhysicalMaterial attach='material' color={props.color} />
    </a.mesh>
  )
}

const ThreeDpage = () => {
  return (
    <div>
      <h2>3D Page</h2>
      <ul>
        <li>Hover to change color.</li>
        <li>Click the box change size.</li>
        <li>Click and hold to rotate the box.</li>
      </ul>
      <Canvas camera={{ position: [-100, -250, -50] }} onCreated={({ gl }) => { gl.shadowMap.enabled = true; gl.shadowMap.type = THREE.PCFShadowMap }}>
        {/* <fog attach='fog' args={['white', 10, 15]} /> */}
        <Controls />
        <Box />
        <Plane />
        <Car />
      </Canvas>
    </div >
  )
}

export default ThreeDpage;