class ExternalInput{
    constructor() {
        this.connected = false;
        if (this.connectExternalInput === undefined) {
            throw new TypeError("Must override connectExternalInput");
        }
    }
}