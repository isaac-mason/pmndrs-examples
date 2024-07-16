import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PositionalAudio } from '@react-three/drei'

import sceneModel from './scene-draco.glb?url'
import zapsplatAudio from './zapsplat_icecream.mp3'

export default function App({ ready }) {
  return (
    <Canvas camera={{ position: [0, 2, 20], fov: 40 }}>
      <fog attach="fog" args={['#cc7b32', 0, 500]} />
      <Model ready={ready} />
    </Canvas>
  )
}

/*
auto-generated by: https://github.com/react-spring/gltfjsx
author: jemepousse (https://sketchfab.com/jemepousse)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/356c773c4b9a45d8b9d4aa04c60ecb27
title: Red City
*/
function Model({ ready }) {
  const group = useRef()
  const { nodes, materials } = useGLTF(sceneModel)
  useFrame(() => (group.current.rotation.y += 0.003))
  return (
    <group ref={group} scale={0.001} position={[0, 0, -100]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-102253.52, -210688.86, -17050.52]}>
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_0.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_1.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_2.geometry} />
          <mesh material={materials.Scene_Root} geometry={nodes.mesh_3.geometry} />
        </group>
        <group position={[100000, 120000, 2000]}>
          {ready && <PositionalAudio autoplay loop url={zapsplatAudio} distance={3} />}
        </group>
        <mesh position={[250000, -200000, 50000]}>
          <sphereGeometry args={[30000, 32, 32]} />
          <meshBasicMaterial color="#ff1020" />
        </mesh>
      </group>
    </group>
  )
}
