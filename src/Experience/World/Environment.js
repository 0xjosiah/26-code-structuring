import * as THREE from 'three'
import Experience from "../Experience";

export default class Environment {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        
        // Debug
        if(this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Environment')
        }

        this.setSunLight()
        this.setEnvMap()
    }


    setSunLight() {
        this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 15
        this.sunLight.shadow.mapSize.set(1024, 1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.sunLight)

        // Debug
        if(this.debug.active) {
            this.sunFolder = this.debugFolder.addFolder('Sun')
            this.sunFolder
                .add(this.sunLight, 'intensity', 0, 10, .001)
                .name('SunLight Intensity')
            this.sunFolder
                .add(this.sunLight.position, 'x', -5, 5, .001)
                .name('sunPos x')
            this.sunFolder
                .add(this.sunLight.position, 'y', .1, 5, .001)
                .name('sunPos y')
            this.sunFolder
                .add(this.sunLight.position, 'z', -5, 5, .001)
                .name('sunPos z')
        }
    }

    setEnvMap() {
        this.envMap = {}
        this.envMap.intensity = .4
        this.envMap.texture = this.resources.items.envMapTexture
        this.envMap.texture.encoding = THREE.sRGBEncoding

        this.scene.environment = this.envMap.texture

        this.envMap.updateMaterial = () => {
            this.scene.traverse((child) => {
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
                    child.material.envMap = this.envMap.texture
                    child.material.envMapIntensity = this.envMap.intensity
                    child.material.needsUpdate = true
                }
            })
        }

        this.envMap.updateMaterial()

        // Debug
        if(this.debug.active) {
            this.debugFolder
                .add(this.envMap, 'intensity', 0, 4, .001)
                .name('Env Map Intensity')
                .onChange(this.envMap.updateMaterial)
        }
    }
}