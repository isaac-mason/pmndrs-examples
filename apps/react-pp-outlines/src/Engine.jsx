import { useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"
import { useControls, folder } from "leva"

import machineModel from "./machine-transformed.glb?url"

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Slava Z. (https://sketchfab.com/slava)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/3d-printable-radial-pneumatic-engine-3cbddbecd6c5462391e9936a3ccd7d32
title: 3d Printable Radial Pneumatic Engine
*/
export function Engine({ ...props }) {
  const group = useRef()
  const { nodes } = useGLTF(machineModel)
  const [hovered, hover] = useState()
  const config = useControls({
    all: { value: false },
    parts: folder(
      {
        gear: { value: false },
        shaft: { value: false },
        cylinder: { value: false },
        piston1: { value: true },
        piston2: { value: false },
        piston3: { value: false },
      },
      { collapsed: true },
    ),
  })
  return (
    <group onPointerOver={(e) => hover(e.object.parent.name)} onPointerOut={(e) => hover(null)} ref={group} {...props} dispose={null}>
      <Select enabled={config.all}>
        <Select name="gear" enabled={hovered === "gear" || config.gear}>
          <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
          <mesh geometry={nodes.mesh_1.geometry} material={nodes.mesh_1.material} />
          <mesh geometry={nodes.mesh_2.geometry} material={nodes.mesh_2.material} />
          <mesh geometry={nodes.mesh_3.geometry} material={nodes.mesh_3.material} />
          <mesh geometry={nodes.mesh_4.geometry} material={nodes.mesh_4.material} />
          <mesh geometry={nodes.mesh_5.geometry} material={nodes.mesh_5.material} />
          <mesh geometry={nodes.mesh_6.geometry} material={nodes.mesh_6.material} />
          <mesh geometry={nodes.mesh_7.geometry} material={nodes.mesh_7.material} />
          <mesh geometry={nodes.mesh_8.geometry} material={nodes.mesh_8.material} />
          <mesh geometry={nodes.mesh_9.geometry} material={nodes.mesh_9.material} />
          <mesh geometry={nodes.mesh_10.geometry} material={nodes.mesh_10.material} />
          <mesh geometry={nodes.mesh_13.geometry} material={nodes.mesh_13.material} />
        </Select>

        <Select name="shaft" enabled={hovered === "shaft" || config.shaft}>
          <mesh geometry={nodes.mesh_29.geometry} material={nodes.mesh_29.material} />
          <mesh geometry={nodes.mesh_30.geometry} material={nodes.mesh_30.material} />
          <mesh geometry={nodes.mesh_31.geometry} material={nodes.mesh_31.material} />
          <mesh geometry={nodes.mesh_32.geometry} material={nodes.mesh_32.material} />
          <mesh geometry={nodes.mesh_33.geometry} material={nodes.mesh_33.material} />
        </Select>

        <Select name="cylinder" enabled={hovered === "cylinder" || config.cylinder}>
          <mesh geometry={nodes.mesh_11.geometry} material={nodes.mesh_11.material} />
          <mesh geometry={nodes.mesh_12.geometry} material={nodes.mesh_12.material} />
          <mesh geometry={nodes.mesh_14.geometry} material={nodes.mesh_14.material} />
          <mesh geometry={nodes.mesh_19.geometry} material={nodes.mesh_19.material} />
          <mesh geometry={nodes.mesh_34.geometry} material={nodes.mesh_34.material} />
          <mesh geometry={nodes.mesh_39.geometry} material={nodes.mesh_39.material} />
          <mesh geometry={nodes.mesh_47.geometry} material={nodes.mesh_47.material} />
          <mesh geometry={nodes.mesh_52.geometry} material={nodes.mesh_52.material} />
        </Select>

        <Select name="piston1" enabled={hovered === "piston1" || config.piston1}>
          <mesh geometry={nodes.mesh_15.geometry} material={nodes.mesh_15.material} />
          <mesh geometry={nodes.mesh_16.geometry} material={nodes.mesh_16.material} />
          <mesh geometry={nodes.mesh_17.geometry} material={nodes.mesh_17.material} />
          <mesh geometry={nodes.mesh_18.geometry} material={nodes.mesh_18.material} />
          <mesh geometry={nodes.mesh_20.geometry} material={nodes.mesh_20.material} />
          <mesh geometry={nodes.mesh_21.geometry} material={nodes.mesh_21.material} />
          <mesh geometry={nodes.mesh_22.geometry} material={nodes.mesh_22.material} />
          <mesh geometry={nodes.mesh_23.geometry} material={nodes.mesh_23.material} />
          <mesh geometry={nodes.mesh_24.geometry} material={nodes.mesh_24.material} />
          <mesh geometry={nodes.mesh_25.geometry} material={nodes.mesh_25.material} />
          <mesh geometry={nodes.mesh_26.geometry} material={nodes.mesh_26.material} />
          <mesh geometry={nodes.mesh_27.geometry} material={nodes.mesh_27.material} />
          <mesh geometry={nodes.mesh_28.geometry} material={nodes.mesh_28.material} />
        </Select>

        <Select name="piston2" enabled={hovered === "piston2" || config.piston2}>
          <mesh geometry={nodes.mesh_35.geometry} material={nodes.mesh_35.material} />
          <mesh geometry={nodes.mesh_36.geometry} material={nodes.mesh_36.material} />
          <mesh geometry={nodes.mesh_37.geometry} material={nodes.mesh_37.material} />
          <mesh geometry={nodes.mesh_38.geometry} material={nodes.mesh_38.material} />
          <mesh geometry={nodes.mesh_40.geometry} material={nodes.mesh_40.material} />
          <mesh geometry={nodes.mesh_41.geometry} material={nodes.mesh_41.material} />
          <mesh geometry={nodes.mesh_42.geometry} material={nodes.mesh_42.material} />
          <mesh geometry={nodes.mesh_43.geometry} material={nodes.mesh_43.material} />
          <mesh geometry={nodes.mesh_44.geometry} material={nodes.mesh_44.material} />
          <mesh geometry={nodes.mesh_45.geometry} material={nodes.mesh_45.material} />
          <mesh geometry={nodes.mesh_46.geometry} material={nodes.mesh_46.material} />
        </Select>

        <Select name="piston3" enabled={hovered === "piston3" || config.piston3}>
          <mesh geometry={nodes.mesh_48.geometry} material={nodes.mesh_48.material} />
          <mesh geometry={nodes.mesh_49.geometry} material={nodes.mesh_49.material} />
          <mesh geometry={nodes.mesh_50.geometry} material={nodes.mesh_50.material} />
          <mesh geometry={nodes.mesh_51.geometry} material={nodes.mesh_51.material} />
          <mesh geometry={nodes.mesh_53.geometry} material={nodes.mesh_53.material} />
          <mesh geometry={nodes.mesh_54.geometry} material={nodes.mesh_54.material} />
          <mesh geometry={nodes.mesh_55.geometry} material={nodes.mesh_55.material} />
          <mesh geometry={nodes.mesh_56.geometry} material={nodes.mesh_56.material} />
          <mesh geometry={nodes.mesh_57.geometry} material={nodes.mesh_57.material} />
          <mesh geometry={nodes.mesh_58.geometry} material={nodes.mesh_58.material} />
          <mesh geometry={nodes.mesh_59.geometry} material={nodes.mesh_59.material} />
        </Select>
      </Select>
    </group>
  )
}
