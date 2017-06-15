class PluginFactory{
    constructor() {
        if (this.createPlugin === undefined) {
            throw new TypeError("Must override createPlugin");
        }
    }
}