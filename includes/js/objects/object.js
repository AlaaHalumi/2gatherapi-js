'use strict'
class Object{
    constructor() {
        if (this.draw === undefined) {
            throw new TypeError("Must override draw");
        }
    }
}