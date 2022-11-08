import * as THREE from 'three'
import Experience from "../Experience";

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene

        const testMesh = new THREE.Mesh(
            new THREE.SphereGeometry(),
            new THREE.MeshBasicMaterial(0xffffff)
        )
        this.scene.add(testMesh)
    }
}