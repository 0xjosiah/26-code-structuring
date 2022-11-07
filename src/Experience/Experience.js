import Sizes from "./Utils/Sizes"

export default class Experience {
    constructor(canvas) {

        // Global access
        window.experience = this // this can be dicey to use but useful, take care when implementing

        // Options
        this.canvas = canvas

        // Setup
        this.sizes = new Sizes()

        this.sizes.on('resize', () => {
            this.resize()
        })
    }

    resize() {
        console.log('a resize occured');
    }
}