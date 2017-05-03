class ObjectFactory{
    constructor() {
        if (this.createObject === undefined) {
            throw new TypeError("Must override createObject");
        }
        if (this.initUtils === undefined) {
            throw new TypeError("Must override initUtils");
        }
        // if (this.initHearingUtils === undefined) {
        //     throw new TypeError("Must override initHearingUtils");
        // }
        // if(sessionStorage.getItem("disability").indexOf("hearing") != -1){
        //     this.initHearingUtils();
        // }
    }
}