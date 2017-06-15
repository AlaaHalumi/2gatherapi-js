class TGObject{
    constructor() {
        if (this.draw === undefined) {
            throw new TypeError("Must override draw");
        }
        if (this.enableTobii === undefined) {
            throw new TypeError("Must override draw");
        }
        if (this.enablejoystick === undefined) {
            throw new TypeError("Must override draw");
        }
        if (this.enableClickers === undefined) {
            throw new TypeError("Must override draw");
        }
    }
}