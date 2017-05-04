class ExternalInput{
    constructor() {
        if (this.connectExternalInput === undefined) {
            throw new TypeError("Must override connectExternalInput");
        }
    }
}