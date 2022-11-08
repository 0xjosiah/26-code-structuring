import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';

export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Test mesh
        const testMesh = new THREE.Mesh(
            new THREE.SphereGeometry(),
            new THREE.MeshStandardMaterial(0xffffff)
        )
        this.scene.add(testMesh)

        // Wait for resources
        this.resources.on('ready', () => {
            // Setup
            this.environment = new Environment()
        })

    }
}