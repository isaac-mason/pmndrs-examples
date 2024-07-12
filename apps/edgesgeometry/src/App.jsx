import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useGLTF, AccumulativeShadows, RandomizedLight, Edges, OrbitControls, Outlines, Environment } from "@react-three/drei"

import bracketModel from "./day58_aluminium_bracket-transformed.glb"

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 day58_aluminium_bracket.glb --transform 
Files: day58_aluminium_bracket.glb [2.23MB] > /Users/ph/Downloads/day58_aluminium_bracket-transformed.glb [272.67KB] (88%)
Author: JuanG3D (https://sketchfab.com/juang3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/day58-aluminium-bracket-496d1c0efbbe4dc38df6f09d4b72c0bc
Title: Day#58: Aluminium bracket
*/
function Model(props) {
  const { nodes } = useGLTF(bracketModel)
  const [hovered, hover] = useState(false)
  return (
    <mesh
      castShadow
      receiveShadow
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      geometry={nodes.defaultMaterial.geometry}
      {...props}>
      <meshStandardMaterial roughness={0.15} metalness={0.5} />
      <Edges linewidth={2} threshold={15} color={hovered ? "#c02040" : "black"} />
      <Outlines thickness={0.01} color={hovered ? "#c02040" : "black"} />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas shadows camera={{ position: [-5, 2.5, 5], fov: 35 }}>
      <ambientLight intensity={Math.PI / 8} />
      <spotLight intensity={Math.PI} decay={0} angle={0.2} castShadow position={[5, 2.5, 5]} shadow-mapSize={128} />
      <Model position={[0, 0.19, 0]} rotation={[0, 0, -Math.PI / 4.45]} />
      <AccumulativeShadows frames={100} temporal>
        <RandomizedLight radius={2} position={[5, 2.5, 5]} />
      </AccumulativeShadows>
      <OrbitControls makeDefault dampingFactor={0.3} />
      <Environment preset="sunset" />
    </Canvas>
  )
}
