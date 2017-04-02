class Object{
    constructor() {
        if (this.draw === undefined) {
            throw new TypeError("Must override draw");
        }
        if (this.initUtils === undefined) {
            throw new TypeError("Must override initUtils");
        }
    }
}