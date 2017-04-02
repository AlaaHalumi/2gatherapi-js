class Plugin{
    constructor() {
        if (this.draw === undefined) {
            throw new TypeError("Must override draw");
        }
    }
}