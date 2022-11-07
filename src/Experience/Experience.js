export default class Experience {
    constructor(canvas) {

        // Global access
        window.experience = this // this can be dicey to use but useful, take care when implementing

        // Options
        this.canvas = canvas
    }
}