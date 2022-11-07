import * as THREE from 'three'
import Sizes from "./Utils/Sizes"
import Time from "./Utils/Time"
import Camera from './Camera'

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
        this.camera = new Camera(this)

        // Resize event
        this.sizes.on('resize', () => this.resize())

        // Tick event
        this.time.on('tick', () => this.update())
    }

    resize() {
        console.log('a resize occured');
    }

    update() {
        // console.log('update the experience')
    }
}