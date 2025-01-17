/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 room.glb --transform
Author: Anex (https://sketchfab.com/anex)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/room-6417cbc1870a4a1691cca06912ae0369
Title: Room
*/

import { useGLTF } from "@react-three/drei"

import roomModel from "./room-transformed.glb?url"

export function Model(props) {
  const { nodes, materials } = useGLTF(roomModel)
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials["Material.003"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.krzeslo_1} />
        <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.krzeslo_okno} />
        <mesh castShadow receiveShadow geometry={nodes.Object_8.geometry} material={materials.krzeslo_prawe} />
        <mesh castShadow receiveShadow geometry={nodes.Object_9.geometry} material={materials.krzeslo_srodek} />
        <mesh castShadow receiveShadow geometry={nodes.Object_10.geometry} material={materials.podloga} />
        <mesh castShadow receiveShadow geometry={nodes.Object_11.geometry} material={materials.sciana_okno} />
        <mesh castShadow receiveShadow geometry={nodes.Object_12.geometry} material={materials["stolik.001"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_16.geometry} material={materials["Material.006"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials["Material.004"]} />
        <mesh geometry={nodes.Object_13.geometry}>
          <meshStandardMaterial transparent opacity={0.5} />
        </mesh>
        <mesh castShadow receiveShadow geometry={nodes.Object_14.geometry} material={materials["Material.002"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_15.geometry} material={materials["Material.005"]} />
        <mesh castShadow receiveShadow geometry={nodes.Object_17.geometry} material={materials.mata} />
        <mesh castShadow receiveShadow geometry={nodes.Object_18.geometry} material={materials.stolik} />
      </group>
    </group>
  )
}

useGLTF.preload(roomModel)
