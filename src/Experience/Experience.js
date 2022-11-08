import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'
import Renderer from './Renderer'
import World from './World/World'
import Resources from './Utils/Resources'

let instance = null

export default class Experience {
    constructor(canvas) {
        // Singleton
        if(instance) return instance
        instance = this

        // Global access
        window.experience = this // this can be dicey to use but useful, take care when implementing; e.g. access experience as global var in Cam class

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()
        this.time = new Time()
        this.scene = new THREE.Scene()
        this.resources = new Resources()
        this.camera = new Camera()
        this.renderer = new Renderer()
        this.world = new World()

        // Resize event
        this.sizes.on('resize', () => this.resize())

        // Tick event
        this.time.on('tick', () => this.update())
    }

    resize() {
        this.camera.resize()
        this.renderer.resize()
    }

    update() {
        this.camera.update() // this order matters, camera then renderer
        this.renderer.update()
    }
}