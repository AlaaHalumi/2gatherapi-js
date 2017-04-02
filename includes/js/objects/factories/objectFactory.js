class ObjectFactory{
    constructor() {
        if (this.createObject === undefined) {
            throw new TypeError("Must override createObject");
        }
        if (this.initUtils === undefined) {
            throw new TypeError("Must override initUtils");
        }
    }
}