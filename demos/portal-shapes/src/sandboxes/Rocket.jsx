import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import rocketModel from './rocket-transformed.glb?url'

export default function App(props) {
  const ref = useRef()
  useFrame((state, delta) => (ref.current.rotation.y += delta / 2))
  return (
    <group ref={ref} {...props}>
      <ambientLight intensity={0.75} />
      <pointLight intensity={1} position={[-10, -25, -10]} />
      <spotLight intensity={2.25} angle={0.2} penumbra={1} position={[-25, 20, -15]} />
      <Model url={rocketModel} />
    </group>
  )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: overlaps (https://sketchfab.com/overlaps)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/91964c1ce1a34c3985b6257441efa500
title: Space exploration [WLP series #8]
*/
function Model({ url }) {
  const { nodes } = useGLTF(url)
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh receiveShadow castShadow geometry={nodes.planet002.geometry} material={nodes.planet002.material} />
        <mesh geometry={nodes.planet003.geometry} material={nodes.planet003.material} />
      </group>
    </group>
  )
}
